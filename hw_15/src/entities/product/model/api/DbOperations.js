import db from '@/shared/config/firebase-config'
import {
	collection,
	doc,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	query,
	orderBy,
	limit,
	startAfter,
	where,
} from 'firebase/firestore/lite'

class DbOperations {
	constructor(name) {
		this.collectionRef = collection(db, name)
	}

	// тут треба передати ще searchValue - значення, яке буде вводити користувач
	async getAllPaginated({ page = 1, perPage = 6, cursors = [], searchValue }) {
		let q

		// беремо на 1 більше, щоб перевірити чи є наступна сторінка
		const realLimit = perPage + 1

		if (page === 1) {
			// Якщо це перша сторінка і при цьому існує searchValue, що означає, що в поле пошуку щось ввели 
			// і треба почати фільтрацію
			if (searchValue) {
				// Отримуємо колекцію згідно з логікою фільтрації та також встановлюємо ліміт
				q = query(this.collectionRef,
					where('titleLowercase', '>=', searchValue),
					where('titleLowercase', '<=', searchValue + '\uf8ff'),
					orderBy('titleLowercase'),
					limit(realLimit)
				)
			} else {
				// а якщо це перша сторінка і searchValue не існує, то залишаємо як і було в цьому методі до фільтрації
				// просто запит на отримання колекції з лімітом
				q = query(this.collectionRef, orderBy('title'), limit(realLimit))
			}
		} else {
			// якщо сторінка не перша, то встановлюємо курсор
			const cursor = cursors[page - 2]
			// Якщо його не знайдено то кидаємо помилку
			if (!cursor) throw new Error('Cursor not found')
			// І тут знову перевіряємо чи searchValue існує і поторюємо запит
			if (searchValue) {
				q = query(this.collectionRef,
					where('titleLowercase', '>=', searchValue),
					where('titleLowercase', '<=', searchValue + '\uf8ff'),
					orderBy('titleLowercase'),
					limit(realLimit)
				)
			} else {
				// якщо searchValue не існує, то запит як і раніше
				q = query(
					this.collectionRef,
					orderBy('title'),
					startAfter(cursor),
					limit(realLimit)
				)
			}
		}

		const snapshot = await getDocs(q)
		const docs = snapshot.docs

		const hasMore = docs.length > perPage

		const data = docs
			.slice(0, perPage)
			.map((doc) => ({ id: doc.id, ...doc.data() }))
		const lastVisible = docs[docs.length - 2] || null

		return { data, cursor: lastVisible, hasMore }
	}

	async getById(id) {
		const snap = await getDoc(doc(this.collectionRef, id))
		return { id: snap.id, ...snap.data() }
	}

	async add(data) {
		await addDoc(this.collectionRef, data)
		return true
	}
	async update(id, data) {
		await updateDoc(doc(this.collectionRef, id), data)
		return true
	}
	async delete(id) {
		await deleteDoc(doc(this.collectionRef, id))
		return true
	}
}

export default DbOperations
