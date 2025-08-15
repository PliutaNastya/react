import { frontRoutes } from "@/shared/config/routes/frontRoutes"

// Створюємо мапу всіх сторінок
const pagesModules = import.meta.glob('../../pages/*.jsx', { eager: false })

const pagesList = Object.keys(frontRoutes.pages)

export const appRouterRoutes = pagesList.map((page) => ({
	...frontRoutes.pages[page],
	lazy: async () => {
		const mod = await pagesModules[`../../pages/${page}.jsx`]() // ← строго за ключем
		return { Component: mod.default }
	},
}))