// Щоб не викликати в кожному компоненті прийомів хуки для отримання пацієнтів та лікарів
// я хочу це робити в одному місці
// 1 - створення адаптеру
// https://redux-toolkit.js.org/api/createEntityAdapter
import { createEntityAdapter } from '@reduxjs/toolkit'

export const patientsAdapter = createEntityAdapter({
	selectId: (patient) => patient.id,
	// Keep the "all IDs" array sorted based on patient titles
	sortComparer: (a, b) => a.fullName.localeCompare(b.fullName),
})
// patientsAdapter - це об'єкт, який має методи
// getInitialState(), що повертає порожній об'єкт { ids: [], entities: {} }
// setAll(state, array), що створює нормалізовану структуру
// getSelectors(), що повертає selectAll, selectById, selectEntities і т.д.

// Далі треба повернутись в api та нормалізувати стан за допомогою transformResponse
// Після цього useGetPatientsQuery() вже буде повертати data не як масив пацієнтів, а як
// { ids: [...], entities: { id: patient } }
// тобто об'єкт, що містить масив всіх айді і entities - об'єкт, в якому ключ - це айді пацієнта, а значення - це і є вся інформація про пацієнта

// далі створення patientsSelectors.js