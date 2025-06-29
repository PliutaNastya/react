import { useState, useCallback, useRef } from 'react'

function useConfirmAction() {
  const [isConfirming, setIsConfirming] = useState(false)
  const [actionData, setActionData] = useState(null)
  // Зберігаємо обробники в рефах, щоб вони не викликали повторний рендеро.
  const confirmHandlerRef = useRef(null)
  const cancelHandlerRef = useRef(null)

  const requestConfirmation = useCallback((data, onConfirm, onCancel) => {
    setIsConfirming(true)
    setActionData(data)
    confirmHandlerRef.current = onConfirm
    cancelHandlerRef.current = onCancel
  }, [])

  const handleConfirm = useCallback(() => {
    setIsConfirming(false)
    if (confirmHandlerRef.current) {
      confirmHandlerRef.current(actionData)
    }
    setActionData(null)
  }, [actionData])

  const handleCancel = useCallback(() => {
    setIsConfirming(false)
    if (cancelHandlerRef.current) {
      cancelHandlerRef.current(actionData)
    }
    setActionData(null)
  }, [actionData])

  return {
    isConfirming,
    actionData,
    requestConfirmation,
    handleConfirm,
    handleCancel,
  }
}

export default useConfirmAction
