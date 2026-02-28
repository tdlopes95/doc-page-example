
# 📚 Documentation Website

This repository contains a clean, lightweight, and fully static **documentation website** built with **HTML, CSS, and vanilla JavaScript**. It features a responsive sidebar navigation system with collapsible menus, smooth scrolling, and automatic submenu activation for deeper documentation pages.

The project is ideal for:
- Technical documentation
- Tutorials and programming guides
- Course materials
- Project wikis
- Internal documentation systems

---

## 🗂️ Project Structure

```
.
├── index.html
├── exemplo1.html
└── add-ins/
    ├── style.css
    └── script.js
```

- **index.html** — Main homepage
- **exemplo1.html** — Subpage with documentation sections
- **style.css** — Styling for layout, sidebar, containers, etc.
- **script.js** — Sidebar behavior, dropdown logic, and smooth scrolling

---

## ✨ Features

### 🔹 Responsive Sidebar Navigation
- Expand/collapse sidebar
- Multi-level dropdown menus
- Auto‑expanding menu for active pages
- SVG icons with rotation effects

### 🔹 Smooth Scrolling
All anchor links linking to documentation sections scroll smoothly for better UX.

### 🔹 Automatic Menu Activation
When a page such as `exemplo1.html` loads, the JS automatically expands the relevant sidebar section so the user clearly sees where they are.

### 🔹 Lightweight and Dependency-Free
No frameworks and no libraries — everything runs on pure HTML, CSS, and JavaScript.

---

## 🚀 Running the Project

### ✔ Option 1: Open Directly
You can open the site by simply clicking:
```
index.html
```

### ✔ Option 2: Run a Local Server
Recommended if using images or advanced paths.
```bash
python -m http.server 5500
```
Then open:
```
http://localhost:5500
```

---

## 📄 Pages

### **index.html**
Simple homepage with placeholder content.

### **exemplo1.html**
Documentation page featuring:
- Introduction
- Getting Started
- Syntax Overview
- Code Examples
- Best Practices

Each section is linked to sidebar anchors.

---

## 🧠 JavaScript Behavior (script.js)

### Sidebar Toggle
Expands or collapses the entire sidebar.

### Dropdown Menus
- Only one submenu stays open at a time.
- Nested menus expand on click.

### Auto‑Activation
Detects if `exemplo1.html` contains nested menus and expands them automatically.

### Smooth Scrolling
Any link starting with `#` will scroll smoothly to its target.

---

## 🎨 Customization
You can easily modify:
- **Colors / spacing / typography** → style.css
- **Sidebar items** → index.html / exemplo1.html
- **Icon SVGs** → replace inside HTML
- **Animation timings** → CSS transitions

---

## 💡 Ideal Use Cases
- Static documentation pages
- Internal company documentation
- Classroom notes & guides
- Project wikis
- API or coding tutorials

---

## 📜 License
Free to use, modify, and distribute for personal or educational projects.

