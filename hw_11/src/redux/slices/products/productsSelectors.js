import { createSelector } from "@reduxjs/toolkit"

const selectProducts = state => state.products.products // поверне товари
const selectFilter = state => state.products.nameForFilter // поверне введене користувачем значення по якому треба фільтрувати

export const selectFilteredProducts = createSelector(
	[selectProducts, selectFilter],
	(products, filter) => products.filter(prod => prod.name.toLowerCase().includes(filter.toLowerCase()))
)
// createSelector - приймає один або кілька селекторів - функції, що витягуються зі стану - в мене це selectProducts та  selectFilter
// та приймає функцію обробник, яка в свою чергу отримує результати селекторів (те, що вище) як вхідні параметри та повертає результат, у моєму випадку - це масив відфільтрованих продуктів
