This project is a complete admin dashboard built using React (Vite) for the frontend and Laravel API for the backend. It includes user authentication using Laravel Sanctum, protected routes, and token-based API requests via Axios. The dashboard provides features like listing users, adding, updating, and deleting users (CRUD), along with loading states, error handling, and form validations. The app structure is modular, using React Router for navigation and context for state management, making it a clean, maintainable full-stack setup ideal for admin panels or management systems.<br>
<br>
🚀 Setup Instructions<br><br>
1️⃣ Open the project folder in VS Code (or your preferred editor).<br>
2️⃣ Open a terminal in the project root.<br>
3️⃣ Run:<br>

composer install<br><br>
✅ Wait for it to finish — this will generate the vendor/ folder.<br>
<br>
4️⃣ After that, navigate to the React frontend:<br>

cd react<br><br>
5️⃣ Run:<br>
<br>
npm install<br>
✅ Wait for it to finish — this will generate the node_modules/ folder and Vite config.<br>
<br>
6️⃣ To run both parts:<br>
<br>
php artisan serve<br>
<br>
# In another terminal (inside the react folder)<br>
npm run dev<br>
⚠ Notes<br>
Make sure you have a valid .env in your Laravel root (copy .env.example if needed):<br>
<br>
cp .env.example .env<br>
php artisan key:generate<br>
Check your DB setup in .env before serving the backend.<br>
