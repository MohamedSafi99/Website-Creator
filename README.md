# AI-Powered Website Generator

This full-stack project uses Google Gemini to generate fully responsive HTML5 landing pages from a business idea prompt.

## 🔧 Technologies

- Backend: NestJS, TypeScript, MongoDB, Google Gemini API
- Frontend: Next.js (App Router), Tailwind CSS, Axios

## 🧠 Features

- Generate semantic HTML pages based on prompts
- Live full-page preview
- Responsive inline CSS, no markdown/images
- Save + fetch pages via MongoDB

## 📦 Setup

### Backend

```bash
cd backend
npm install
cp .env.example .env # Add MONGO_URI & GEMINI_API_KEY
npm run start:dev ```


### Frontend

cd frontend
npm install
cp .env.local.example .env.local # Add NEXT_PUBLIC_API_URL=http://localhost:3001
npm run dev ```



## 📦 API

POST /ideas — Generate and save a page
GET /ideas/:id — Fetch a page by ID

