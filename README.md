# ⚡ SwiftNews

![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css)
![GNews API](https://img.shields.io/badge/-GNews%20API-blue?style=flat)

SwiftNews is a blazing-fast, SEO-optimized, modern React-based news application fetching live headlines via the [GNews API](https://gnews.io/). Built with performance and clarity in mind.

---

## 🌟 Features

- 🌐 Top headlines by **category & country**
- 🎨 Light/Dark Mode Toggle
- ⚡ Lazy-loaded images
- 🚀 Fast loading with `react-top-loading-bar`
- 📱 Fully responsive
- ❌ Custom 404 error page
- 🧠 Semantic and SEO-friendly

---

## 🔧 Tech Stack

- **React**
- **React Router**
- **Tailwind CSS** *(or Bootstrap in old version)*
- **GNews API**
- **React Lazy Load Image**
- **Vite / CRA (depending on build)*

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/yourusername/swiftnews.git
cd swiftnews
npm install
```

---

## Create a .env.local file:

```
ini
REACT_APP_NEWS_API=your_api_key_here
```

Then run:
```
bash
npm start
```

---

## 📂 Folder Structure

```
src/
├── Components/
│   ├── News.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── NotFound.js
│   └── Spinner.js
├── App.js
├── index.js
└── App.css
```

---

## 📄 License
This project is licensed under the MIT License.

---