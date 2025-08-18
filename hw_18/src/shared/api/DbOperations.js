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
	setDoc,
	deleteField,
} from 'firebase/firestore/lite'

class DbOperations {
	// --- CARTS SPECIALIZED METHODS ---
	// get cart object for user_id
	async getCartByUserId(userId) {
		const snap = await getDoc(doc(this.collectionRef, userId))
		if (!snap.exists()) return {}
		return snap.data() // { product_id: { ... } }
	}
	// set full cart object for user_id
	async setCartByUserId(userId, cartObj) {
		await setDoc(doc(this.collectionRef, userId), cartObj)
		return true
	}
	async setCartProduct(userId, productId) {
		await setDoc(doc(this.collectionRef, userId),
			{ [productId]: { addedAt: new Date().toISOString() } },
			{ merge: true }
		)
		return true
	}
	// update/add one product in cart for user_id
	async updateCartProduct(userId, productId, productData) {
		await setDoc(doc(this.collectionRef, userId), { [productId]: productData }, { merge: true })
		return true
	}
	// remove one product from cart for user_id
	async removeCartProduct(userId, productId) {
		await updateDoc(doc(this.collectionRef, userId), { [productId]: deleteField() }) 
		return true
	}
	constructor(name) {
		this.collectionRef = collection(db, name)
	}
	// --- PRODUCTS SPECIALIZED METHODS ---
	async getAll() {
		const snapshot = await getDocs(this.collectionRef)
		return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
	}
	async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
		let q

		const realLimit = perPage + 1 // беремо на 1 більше

		if (page === 1) {
			q = query(this.collectionRef, orderBy('title'), limit(realLimit))
		} else {
			const cursor = cursors[page - 2]
			if (!cursor) throw new Error('Cursor not found')
			q = query(
				this.collectionRef,
				orderBy('title'),
				startAfter(cursor),
				limit(realLimit)
			)
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
	async setWithId(id, data) {
		await setDoc(doc(this.collectionRef, id), data)
		return true
	}
	async add(data) {
		const ref = await addDoc(this.collectionRef, data)
		return ref.id
	}
	async update(id, data) {
		await updateDoc(doc(this.collectionRef, id), data)
		return true
	}
	async delete(id) {
		await deleteDoc(doc(this.collectionRef, id))
		return true
	}
	// --- FAVORITES SPECIALIZED METHODS ---
	// get favorite object for user_id
	async getFavoriteByUserId(userId) {
		const snap = await getDoc(doc(this.collectionRef, userId))
		if (!snap.exists()) return {}
		return snap.data() // { product_id: { ... } }
	}
	// remove one product from favorites for user_id
	async removeFavoriteProduct(userId, productId) {
		await updateDoc(doc(this.collectionRef, userId), {
			[productId]: deleteField(),
		})
		return true
	}
	// async addFavoriteProduct(userId, productId, productData = true) {
	// 	await setDoc(doc(this.collectionRef, userId), { [productId]: productData }, { merge: true })
	// 	return true
	// }
	async addFavoriteProduct(userId, productId) {
		await setDoc(doc(this.collectionRef, userId),
			{ [productId]: { addedAt: new Date().toISOString() } },
			{ merge: true }
		)
		return true
	}

	// 1) Часткове оновлення конкретної локалі (merge = true робить глибоке злиття)
	async setProductLocale(productId, locale, values) {
		await setDoc(doc(this.collectionRef, productId), { i18n: { [locale]: values } }, { merge: true })
		return true
	}

	// 2) Отримати продукт і одразу підставити потрібну мову з фолбеком на uk
	async getProductLocalized(productId, locale = 'uk') {
		const snap = await getDoc(doc(this.collectionRef, productId))
		if (!snap.exists()) return null
		const data = snap.data()
		const tr = data?.i18n?.[locale] || data?.i18n?.uk || {}
		return { id: snap.id, ...data, _tr: tr } // у UI - _tr.title/_tr.description
	}

	// 3) Список продуктів з підставленою локаллю
	async getAllLocalized(locale = 'uk') {
		const snapshot = await getDocs(this.collectionRef)
		return snapshot.docs.map(d => {
			const obj = d.data()
			const tr = obj?.i18n?.[locale] || obj?.i18n?.uk || {}
			return { id: d.id, ...obj, _tr: tr }
		})
	}

}

export default DbOperations
