import { useState, useEffect, useCallback } from 'react'

function useLocalStorage(key, initialValue) {
  // Функція для отримання початкового значення з localStorage
  const getStoredValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return initialValue
    }
  }, [key, initialValue])

  const [value, setValue] = useState(getStoredValue)

  // useEffect для синхронізації стану з localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
