# dashboard
Dashboard-assignment

# 🧠 AI-Powered Article Dashboard

This is a React + TypeScript dashboard application that displays a list of articles with metadata, such as keywords, word counts, and creation dates. It features UI components like cards, tables, skeleton loaders, search functionality, and external Wikipedia linking.

## 🚀 Features

- ✅ Displays article metadata in a dynamic table.
- 🔍 Search functionality for filtering articles by title or keyword.
- 🖼️ Skeleton loading effect to simulate async data fetching.
- 🌐 Wikipedia icon linking (clickable with tooltip).
- 🎨 Beautiful UI using reusable components (`Card`, `Table`, `Button`, `Skeleton`).
- 🧱 Fully typed with TypeScript for safety and maintainability.

---

## 📦 Tech Stack

- **React** + **TypeScript**
- **Vite** (or Create React App)
- **Tailwind CSS** for styling
- **Lucide-react** for icons
- Modular folder structure with component reuse

---

## 📁 Project Structure
src/
│
├── components/
│ ├── ui/
│ │ ├── card.tsx
│ │ ├── table.tsx
│ │ ├── button.tsx
│ │ └── skeleton.tsx
│ ├── app-slider.tsx
│ └── data-table.tsx
│
├── pages/
│ └── Dashboard.tsx
│
├── data/
│ └── data.json
│
├── App.tsx
└── main.tsx

