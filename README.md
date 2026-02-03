# My Portfolio

> **Warning: 🚧 Work in Progress 🚧**  
> This project is currently under active development. Some features may be incomplete or subject to change.

## 📄 Overview
This is a personal portfolio website designed to showcase my projects, skills, and professional journey. The site focuses on a clean, modern aesthetic using **Glassmorphism** and responsive design principles.

## 🛠 Tech Stack
- **HTML5**: Core structure.
- **Tailwind CSS** (via CDN): Utility-first CSS framework for styling.
- **JavaScript**: Vanilla JS for logic, including a custom client-side router.
- **Font Awesome**: Iconography.
- **Google Fonts**: Typography (Inter).

## ✨ Features
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Custom Routing**: Single Page Application (SPA) feel without heavy frameworks.
- **Glassmorphism UI**: Modern, translucent navigational elements.
- **Dynamic Content Loading**: Pages are rendered dynamically via JavaScript.

## 🚀 Getting Started

### Prerequisites
You strictly need a web browser. No `npm install` is required as dependencies are loaded via CDN.

### Installation
1.  **Clone the repository**
    ```bash
    git clone https://github.com/muhammadiqbalsaputra/my-portofolio.git
    cd my-portofolio
    ```

2.  **Run the project**
    - You can open `index.html` directly in your browser.
    - **Recommended**: Use a local development server (like VS Code's *Live Server* extension) to ensure all routing and script loading works correctly (avoids CORS issues with local files).

## 📂 Project Structure
```text
my-portofolio/
├── pages/              # JavaScript logic for individual pages
├── images/             # Static assets
├── index.html          # Main entry point
├── projects.html       # Projects markup (fallback/source)
├── contact.html        # Contact markup (fallback/source)
├── about.html          # About markup (fallback/source)
├── router.js           # Navigation routing logic
├── navbar.js           # Navigation bar component
├── script.js           # Main application script
└── README.md           # This file
```

## 📝 TODO
- [ ] Complete Project Gallery population.
- [ ] Finalize Contact Form functionality.
- [ ] Optimize mobile menu animations.
- [ ] Refine content text.

---
© 2024 Muhammad Iqbal Saputra
