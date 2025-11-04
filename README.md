# 🗂️ Kanban Board — React + Tailwind + Framer Motion

A modular, drag-and-drop Kanban board built with React, Vite, Tailwind CSS, and Framer Motion. Features task editing via modal, priority badges, empty states, WIP limits, and Storybook previews — designed for recruiter-ready frontend portfolios.

- To Preview individual Kanban Component - npm run dev (on port 5173)
<img width="1182" height="318" alt="image" src="https://github.com/user-attachments/assets/921e54e2-1ce3-49a0-af50-95a5aff17a74" />

- To Preview under Storybook - npm run storybook (on port 6006)
<img width="1893" height="627" alt="image" src="https://github.com/user-attachments/assets/d0df2f49-f0a2-4b41-a8df-11c3c81a9d30" />

---
## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧩 React DnD (drag-and-drop)
- 📚 Storybook
- 🎞️ Framer Motion

---

## 📁 Folder Structure
src/
├── components/        # Reusable UI components
│   ├── Board/         # Kanban board layout
│   ├── Column/        # Individual column logic
│   ├── Card/          # Task cards with priority badges
│   ├── Modal/         # Task editing modal
│   ├── EmptyState.tsx # Empty column visuals
│   └── index.ts       # Central export
├── hooks/             # Custom React hooks (e.g., useWIPLimit)
├── utils/             # Helper functions (e.g., priorityColor)
├── types/             # TypeScript interfaces and enums
├── animations/        # Framer Motion variants
├── stories/           # Storybook stories
├── App.tsx
└── main.tsx
