import { useState, useCallback } from 'react'
import useConfirmAction from './useConfirmAction'

function ItemManager() {
  const [items, setItems] = useState([
    { id: 1, name: 'Ноутбук' },
    { id: 2, name: 'Смартфон' },
    { id: 3, name: 'Монітор' },
  ])
  // Використовуємо кастомний хук
  const {
    isConfirming,
    actionData: itemToDelete,
    requestConfirmation,
    handleConfirm,
    handleCancel,
  } = useConfirmAction()

  const handleDeleteClick = useCallback(
    (item) => {
      requestConfirmation(
        item,
        (confirmedItem) => {
          console.log(`Підтверджено видалення елемента: ${confirmedItem.name}`)
          setItems((prevItems) =>
            prevItems.filter((i) => i.id !== confirmedItem.id)
          )
          alert(`Елемент "${confirmedItem.name}" видалено!`)
        },
        (cancelledItem) => {
          console.log(`Видалення елемента "${cancelledItem.name}" скасовано.`)
          alert(`Видалення "${cancelledItem.name}" скасовано.`)
        }
      )
    },
    [requestConfirmation]
  )

  return (
    <div>
      <h2>Управління елементами</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => handleDeleteClick(item)}
              style={{ marginLeft: '10px' }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      {/* Модальне вікно підтвердження */}
      {isConfirming && itemToDelete && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              textAlign: 'center',
              color: 'black',
            }}
          >
            <h3>Підтвердження дії</h3>
            <p>Ви впевнені, що хочете видалити "{itemToDelete.name}"?</p>
            <button
              onClick={handleConfirm}
              style={{ marginRight: '10px', padding: '8px 15px' }}
            >
              Підтвердити
            </button>
            <button onClick={handleCancel} style={{ padding: '8px 15px' }}>
              Скасувати
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemManager
