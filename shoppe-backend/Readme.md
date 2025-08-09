# Shop Backend

Це бекенд для e-commerce сайту, створений на Node.js + Express + MongoDB.

## Встановлення

Склонуйте репозиторій або скопіюйте файли.

```bash
npm install
cp .env.example .env
```

Заповніть файл `.env` своїми даними (MongoDB URI, JWT Secret, Email для Contact Us).

## Запуск

Запустіть бекенд у dev режимі:

```bash
npm run dev
```

Бекенд доступний на:

```
http://localhost:5000
```

## Основні роутери

- **Auth**
  - POST /api/auth/register
  - POST /api/auth/login
  - GET /api/auth/me

- **Products**
  - GET /api/products
  - GET /api/products/:id

- **Categories**
  - GET /api/categories

- **Reviews**
  - POST /api/reviews
  - GET /api/reviews/:productId

- **Blog**
  - GET /api/blog
  - GET /api/blog/:slug

- **Contact Us**
  - POST /api/contact

- **Orders**
  - POST /api/orders
  - GET /api/orders
  - GET /api/orders/:id

- **Cart**
  - GET /api/cart
  - POST /api/cart/add
  - DELETE /api/cart/remove/:productId

- **Wishlist**
  - GET /api/wishlist
  - POST /api/wishlist/add
  - DELETE /api/wishlist/remove/:productId

## Seed-дані

Можна додати окремий скрипт для заповнення тестових товарів і категорій.

## Email

Форма Contact Us надсилає лист на email, який ви вкажете в .env

## Авторизація

JWT токени зберігаються в localStorage на фронті або в cookie.

