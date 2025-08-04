src
├── App.css
├── App.jsx
├── app
│   ├── router.js
│   └── store.js
├── assets
│   └── react.svg
├── entities
│   └── product
│       ├── index.js
│       ├── model
│       │   ├── api
│       │   │   └── DbOperations.js
│       │   └── productsApi.js
│       └── ui
│           └── ProductCard.jsx
├── features
│   ├── cart
│   │   ├── model
│   │   │   └── cartSlice.js
│   │   └── ui
│   │       └── AddToCartButton.jsx
│   └── product
│       ├── add-product
│       │   ├── index.js
│       │   ├── model
│       │   │   └── useAddProduct.js
│       │   └── ui
│       │       └── AddProductButton.jsx
│       ├── delete-product
│       │   ├── index.js
│       │   ├── model
│       │   │   └── useDeleteProduct.js
│       │   └── ui
│       │       └── DeleteProductButton.jsx
│       ├── edit-product
│       │   ├── index.js
│       │   ├── model
│       │   │   └── useEditProduct.js
│       │   └── ui
│       │       └── EditProductLink.jsx
│       └── product-form
│           ├── index.js
│           ├── model
│           │   └── useProductForm.js
│           └── ui
│               └── ProductForm.jsx
├── index.css
├── main.jsx
├── pages
│   ├── CartPage.jsx
│   ├── HomePage.jsx
│   ├── PageNotFound.jsx
│   ├── ProductEditPage.jsx
│   └── ProductsPage.jsx
├── shared
│   └── config
│       └── firebase-config.js
└── widgets
    ├── MainLayout
    │   ├── MainLayout.jsx
    │   ├── index.js
    │   └── ui
    │       └── MainMenu.jsx
    ├── ProductEditFormWidget
    │   └── ui.jsx
    └── ProductListWidget
        ├── ProductList.jsx
        └── ui
            └── Pagination.jsx