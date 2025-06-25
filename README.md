
# 🎯 HobbyNest

**Live Site URL:** [https://hobbynest.netlify.app/](https://hobbynest.netlify.app/)

HobbyNest is a full-stack web application designed to help users discover, create, and join local hobby-based groups. Whether you're a passionate reader, coding enthusiast, or photography lover — HobbyNest brings like-minded individuals together into vibrant communities through organized group activities.

---


---

## 🚀 Features

- 🔐 **Authentication with Firebase** — Secure login/signup using Firebase Auth with protected routes for members and admins.
- 📍 **Group Management System** — Create, update, and delete groups with name, description, category, dates, and capacity.
- 🧑‍💼 **User & Admin Dashboards** — Role-based dashboards to manage group participation and group approvals.
- 🌙 **Dark Mode Support** — Beautiful and accessible dark/light mode toggling.
- 🌐 **MongoDB & Express Backend** — RESTful API integration to handle users, roles, and hobby group logic.
- ⚙️ **Environment Variables** — `.env` based configuration for database and Firebase keys.
- 📦 **Optimized & Responsive UI** — Fully responsive UI using Tailwind CSS and DaisyUI.

---

## 🧩 Tech Stack

| Category       | Tech Used                         |
|----------------|-----------------------------------|
| **Frontend**   | React, Tailwind CSS, DaisyUI       |
| **Backend**    | Node.js, Express.js, MongoDB       |
| **Auth**       | Firebase Authentication            |
| **Routing**    | React Router                       |
| **State**      | React Context / useState           |
| **Deployment** | Vercel (Frontend), Render (Backend) |
| **Hosting**    | Firebase Hosting                   |

---

## 📦 Dependencies

| Package             | Purpose                               |
|---------------------|---------------------------------------|
| **react**           | Core frontend framework               |
| **react-router-dom**| Page routing                          |
| **firebase**        | User authentication                   |
| **axios**           | REST API calls                        |
| **react-icons**     | Icon support                          |
| **daisyui**         | Tailwind UI components                |
| **tailwindcss**     | CSS framework                         |
| **dotenv**          | Environment variables                 |
| **express**         | Backend routing and APIs              |
| **mongodb**         | NoSQL database                        |
| **cors**            | Enable cross-origin requests          |
| **jsonwebtoken**    | Backend user verification (optional)  |
| **vercel / render** | Deployment platform                   |

---

## 🛠️ Local Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/hobbynest.git
cd hobbynest

# 2. Install client dependencies
cd client
npm install

# 3. Install server dependencies
cd ../server
npm install

# 4. Set up .env files for Firebase and MongoDB
# Example .env (client)
VITE_API_URL=https://your-api-url.com
VITE_FIREBASE_API_KEY=your_key

# Example .env (server)
MONGODB_URI=your_mongo_uri
PORT=5000

# 5. Run both client and server
# From /client
npm run dev

# From /server
node index.js
````

---

## 🔗 Relevant Links

* 🔴 Live Site: [https://hobbynest.netlify.app](https://hobbynest.netlify.app)
* 🟠 GitHub Frontend: [https://github.com/your-username/hobbynest](https://github.com/your-username/hobbynest)
* 🟢 GitHub Backend: [https://github.com/your-username/hobbynest-server](https://github.com/your-username/hobbynest-server)
* 🟡 Firebase Console (private): [https://console.firebase.google.com](https://console.firebase.google.com)
* 🔵 Render Dashboard (private): [https://dashboard.render.com](https://dashboard.render.com)

---

## 👩‍💻 Developed by

**Umme Sadia Sayti**
[Facebook](https://fb.com/umme.sadia.sayti) | [GitHub](https://github.com/sadia126)


