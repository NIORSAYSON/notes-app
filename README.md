# 📒 Notes App – React Native (Expo)

A simple and intuitive mobile notes application built with **React Native**, featuring a secure login system, persistent sessions, and full CRUD functionality for personal notes — all wrapped in a clean, modern UI.

> 🎨 Designed by **Nestor Sayson Jr.**  
> 🔗 [View the Figma Design](https://www.figma.com/design/z5HPX5jpns4Qqwr781rdqM/Untitled?node-id=42-2&t=KeAJEbWhdevIGIBS-1)

---
# How to Clone the Repository

To clone the repository [https://github.com/NIORSAYSON/notes-app.git](https://github.com/NIORSAYSON/notes-app.git) to your local machine, follow these steps:

---

## 1. Open Git Bash (or your terminal)
Make sure you have **Git installed** on your system. You can check it by running:

```bash
git --version
```

---

## 2. Navigate to the directory where you want to clone it
For example:

```bash
cd C:\Users\YourName\Documents\Projects
```

*(Replace with your preferred path.)*

---

## 3. Run the clone command

```bash
git clone https://github.com/NIORSAYSON/notes-app.git
```

This will create a folder named `notes-app` in your current directory.

---

## 4. Go into the project folder

```bash
cd notes-app
```

---

## 5. (Optional) Install dependencies
If this is a **Node.js/React Native/Expo** project, run:

```bash
npm install
```

or if using **yarn**:

```bash
yarn install
```


---
## ✨ Features

### 🔐 Login Screen
- Mock credentials:
  - **Username**: `test`
  - **Password**: `password123`
- Input validation for:
  - Empty fields
  - Incorrect credentials
- Login session persists even after app restarts using `redux-persist`.

### 🏠 Home Dashboard
- **Search Bar**: Filter notes by title or description
- **Note List**: Displays all saved notes
- **Note Item**: Shows note title, description, with Edit and Delete buttons
- **Add Button**: Opens a modal to add a new note
- **Add Note Modal**:
  - Inputs for note title and description
  - Cancel and Confirm buttons
- **Empty State UI**:
  - Message: _"No notes yet"_
  - "+" button to create a note
- **Logout Button**: Clears session and redirects to Login screen

---

## ⚙️ Tech Stack

- **React Native** via [Expo](https://expo.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **UI/UX**: Custom-designed in Figma by Nestor Sayson Jr.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- Git
- Expo CLI installed globally
  ```bash
  npm install -g expo-cli
