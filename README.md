This project is a complete admin dashboard built using React (Vite) for the frontend and Laravel API for the backend. It includes user authentication using Laravel Sanctum, protected routes, and token-based API requests via Axios. The dashboard provides features like listing users, adding, updating, and deleting users (CRUD), along with loading states, error handling, and form validations. The app structure is modular, using React Router for navigation and context for state management, making it a clean, maintainable full-stack setup ideal for admin panels or management systems.

🚀 Setup Instructions
1️⃣ Open the project folder in VS Code (or your preferred editor).
2️⃣ Open a terminal in the project root.
3️⃣ Run:

composer install
✅ Wait for it to finish — this will generate the vendor/ folder.

4️⃣ After that, navigate to the React frontend:

cd react
5️⃣ Run:

npm install
✅ Wait for it to finish — this will generate the node_modules/ folder and Vite config.

6️⃣ To run both parts:

php artisan serve

# In another terminal (inside the react folder)
npm run dev
⚠ Notes
Make sure you have a valid .env in your Laravel root (copy .env.example if needed):

cp .env.example .env
php artisan key:generate
Check your DB setup in .env before serving the backend.
