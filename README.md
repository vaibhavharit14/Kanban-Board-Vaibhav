# 🗂️ Kanban Board — React + Tailwind + Framer Motion

A modular, drag-and-drop Kanban board built with React, Vite, Tailwind CSS, and Framer Motion. Features task editing via modal, priority badges, empty states, WIP limits, and Storybook previews — designed for recruiter-ready frontend portfolios.

---

## 🚀 Live Preview



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