# Code Review Checklist Chrome Extension

A lightweight Chrome extension that helps developers perform **structured and consistent code reviews** using a simple checklist UI.

It opens a sidebar on any webpage (especially useful on GitHub PRs) where you can track key review aspects like logic, edge cases, logging, and more - ensuring nothing important is missed.

---

## 📌 Table of Contents

* [Features](#-features)
* [Installation](#-installation)
* [Usage](#-usage)
* [Project Structure](#-project-structure)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🚀 Features

* ✅ Sidebar checklist UI
* ✅ Tick / untick review items
* ✅ Persistent state per PR/page
* ✅ Lightweight and fast (no frameworks)
* ✅ Works on any website
* ✅ Isolated UI (no CSS conflicts)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/aayushsrivastava9760/codeRC.git
cd codeRC
```

---

### 2. Load extension in Chrome

1. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked**
4. Select the project folder

---

### 3. Pin the extension

* Click the **Extension** icon
* Pin the extension for quick access

---

## 🧑‍💻 Usage

1. Open any webpage (recommended: GitHub Pull Request)
2. Click the extension icon
3. A sidebar will appear with the checklist
4. Tick items as you review code
5. Progress is automatically saved for that page

---

### Example Checklist

* ☐ Logic is correct
* ☐ Edge cases handled
* ☐ Proper logging added
* ☐ Error handling done
* ☐ Naming is meaningful
* ☐ Tests are added
* ☐ Code is modular

---

## 📁 Project Structure

```
code-review-checklist-extension/
│
├── manifest.json        # Extension configuration
├── background.js        # Handles extension click events
├── content.js           # Injects sidebar & logic
├── modal.css            # Sidebar styling
├── icons/               # Extension icons
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit:

   ```bash
   git commit -m "Add your feature"
   ```
5. Push:

   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💡 Future Improvements

* GitHub PR auto-detection
* Checklist categories (Logic / Quality / Testing)
* Keyboard shortcuts
* AI-powered review suggestions

---

## ⭐ Support

If you find this useful, consider giving it a ⭐ on GitHub!

---
