import { useState, useCallback } from 'react'

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback((event) => {
    setValue(event.target.value)
  }, [])

  const clearInput = useCallback(() => {
    setValue('')
  }, [])

  return {
    value,
    onChange: handleChange,
    clear: clearInput,
  }
}

export default useInput
