# 📒 Notes App – React Native (Expo)

A simple and intuitive mobile application built with **React Native**, featuring a secure login, persistent sessions, note creation/editing, and a clean, modern design inspired by [this Figma prototype](https://www.figma.com/design/z5HPX5jpns4Qqwr781rdqM/Untitled?node-id=42-2&t=KeAJEbWhdevIGIBS-1).

## ✨ Features

### 🔐 Login Screen
- **Mock Credentials**:
  - Username: `test`
  - Password: `password123`
- Input validation for empty fields and incorrect credentials
- Successful login persists across app restarts (via `redux-persist`)

### 🏠 Home Dashboard
- **Search Bar**: Filter notes by title or description in real-time
- **Note List**:
  - Shows created notes
  - Each note displays title, description, **Edit** and **Delete** buttons
- **Add Button**: Opens a modal to create a new note
- **Add Note Modal**:
  - Inputs for note title and description
  - Includes "Cancel" and "Confirm" buttons
- **Empty State UI**:
  - If no notes are present, shows a message like _"No notes yet"_ with a "+" button to add one
- **Logout Button**: Clears session and redirects to login screen

---

## ⚙️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [redux-persist](https://github.com/rt2zz/redux-persist)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **UI/UX Design**: Based on [this Figma prototype](https://www.figma.com/design/z5HPX5jpns4Qqwr781rdqM/Untitled?node-id=42-2&t=KeAJEbWhdevIGIBS-1)

---

## 🚀 Setup Instructions

### 1. Prerequisites
- Node.js (v18+ recommended)
- Expo CLI (`npm install -g expo-cli`)
- Git

### 2. Clone the Repository
```bash
git clone https://github.com/yourusername/notes-app.git
cd notes-app
