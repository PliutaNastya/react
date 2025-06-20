# React + Vite e-commerce project

This is a React project of an online store. I want to build this to learn React.

---

## [Template](https://www.figma.com/design/p9Jq25VeRlhc3U1gryQVYz/Skincare-E-commerce-Website--Community-?m=auto&t=lUvIBfkmD40NX3FV-6)

## 🔧 Main Features

- Landing page with hero section
- Menu (navigation bar)
- Product listing page
- Single product page (product details)
- Search page
- Cart page
- Stores page (list of offline stores)
- Login page
- About Page
- Blog page
- FAQ page (questions and answers)

## 📦 Main Components

- `Header` — top navigation bar
- `Footer` — bottom section
- `Popup` - modal block
- `ProductCard` — shows one product
- `ProductList` — shows many products
- `CategoryTabs` - filters by category
- `SearchBar` — input for search
- `CartItem` — product in the cart
- `LoginForm` — login form
- `BlogPost` — one article
- `FAQItem` — one question/answer
- `Accordion` - collapsible sections
- `Blog card` - one card in Blog page
- `Blog cards preview` - for all pages
- `Product Details Accordion`
- `ReviewSummary`
- `ReviewList`
- `Suggested Products`
- `Button` - one button
- `LanguageSelector`
- `WishlistIcon`
- `CartIcon`
- `Loader` — loading spinner

---

## 📁 Folder Structure

src/
├── assets/ → images/, icons/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   └── ...
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductPage.jsx
│   ├── SearchPage.jsx
│   ├── CartPage.jsx
│   ├── StoresPage.jsx
│   ├── LoginPage.jsx
│   ├── BlogPage.jsx
│   ├── FAQPage.jsx
│   └── ...
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.json (https://dummyjson.com)
├── App.jsx
└── main.jsx

---

## 📌 Optional

- Filter and sort products
- Pagination
- Product rating and reviews

---

## 🎯 Goal

To learn how to:

- Create routes and pages with React Router
- Use Context API for global state (cart, auth)
- Create and reuse components
- Work with fake data (JSON)