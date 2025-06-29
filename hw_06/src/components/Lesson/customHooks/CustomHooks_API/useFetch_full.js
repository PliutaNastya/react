import { useState, useEffect, useRef } from 'react'

const API_BASE_URL = 'http://localhost:5000/api' // Базовий URL бекенду

function useFetch(urlPath, method = 'GET', body = null) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Використовуємо useRef, щоб зберігати поточні опції запиту
  // Це дозволить нам тригерити ефект лише при зміні самого urlPath, method, або body
  // та не перестворювати об'єкт options при кожному рендері.
  const optionsRef = useRef({ method, body })

  // Оновлюємо optionsRef при зміні method або body
  useEffect(() => {
    optionsRef.current = { method, body }
  }, [method, body])

  useEffect(() => {
    // Якщо urlPath пустий, скидаємо стан і не робимо запит
    if (!urlPath) {
      setData(null)
      setLoading(false)
      setError(null)
      return
    }

    const fullUrl = `${API_BASE_URL}${urlPath}`
    const abortController = new AbortController()
    const signal = abortController.signal

    setLoading(true)
    setError(null)

    const fetchData = async () => {
      try {
        const fetchOptions = {
          method: optionsRef.current.method,
          signal,
          headers: {},
        }

        // Додаємо тіло запиту та заголовок Content-Type для POST/PUT
        if (
          optionsRef.current.body &&
          ['POST', 'PUT'].includes(optionsRef.current.method)
        ) {
          fetchOptions.body = JSON.stringify(optionsRef.current.body)
          fetchOptions.headers['Content-Type'] = 'application/json'
        }

        // Додаємо Authorization, якщо потрібно (наприклад, для майбутньої автентифікації)
        // if (localStorage.getItem('token')) {
        //   fetchOptions.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        // }

        const response = await fetch(fullUrl, fetchOptions)

        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`
          try {
            const errorData = await response.json()
            errorMessage = errorData.error || errorData.message || errorMessage
          } catch (jsonError) {
            // Якщо не вдалося розпарсити JSON помилки
            console.error('Failed to parse error response JSON:', jsonError)
          }
          throw new Error(errorMessage)
        }

        // Для DELETE запитів, які можуть не повертати тіло, перевіряємо
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const json = await response.json()
          setData(json)
        } else {
          // Якщо відповідь не JSON (наприклад, 204 No Content для DELETE)
          setData(true) // Можна повернути true або null, щоб вказати на успіх
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch request aborted.')
          return
        }
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      abortController.abort()
      console.log('Мережевий запит скасовано при очищенні.')
    }
  }, [urlPath]) // Залежність лише urlPath, оскільки method та body відстежуються через useRef

  // Додамо функцію для ручного тригеру запиту, якщо потрібно
  // Це дозволить нам використовувати хук для POST/PUT/DELETE, які тригеряться вручну
  const execute = async (newBody = body) => {
    setLoading(true)
    setError(null)
    const fullUrl = `${API_BASE_URL}${urlPath}`
    const abortController = new AbortController()
    const signal = abortController.signal

    try {
      const fetchOptions = {
        method: optionsRef.current.method,
        signal,
        headers: {},
      }

      if (newBody && ['POST', 'PUT'].includes(optionsRef.current.method)) {
        fetchOptions.body = JSON.stringify(newBody)
        fetchOptions.headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(fullUrl, fetchOptions)

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorData.message || errorMessage
        } catch (jsonError) {
          console.error('Failed to parse error response JSON:', jsonError)
        }
        throw new Error(errorMessage)
      }

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json()
        setData(json)
        return json // Повертаємо дані для ручного обробника
      } else {
        setData(true)
        return true
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch request aborted during manual execution.')
        return null
      }
      setError(err.message)
      throw err // Прокидаємо помилку далі
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, execute }
}

export default useFetch
