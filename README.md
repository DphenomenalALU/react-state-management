# React Guided Learning Activity: useContext & useReducer

This project demonstrates two core React state-management patterns in a small, typed task manager:

- `useContext` shares a light/dark theme across the application.
- `useReducer` manages adding and removing tasks with explicit typed actions.

## Features

- Fully typed React + TypeScript implementation
- Theme provider and reusable `useTheme` hook
- Accessible theme toggle with persistent UI feedback
- Task creation by button or Enter key
- Empty state, task count, and one-click task removal
- Responsive styling based on the activity palette

## Run locally

```bash
npm install
npm run dev
```

The app is available at `http://localhost:5173/`.

## Project structure

```text
src/
├── components/       # Navbar and TaskManager UI
├── constants/        # Theme values
├── context/          # Theme provider and custom hook
├── reducers/         # Typed task reducer and actions
├── App.tsx           # Application composition
└── main.tsx          # React entry point
```

## Color palette

| Theme | Background | Text | Accent |
| --- | --- | --- | --- |
| Light | `#FFFFFF` | `#000000` | `#1E90FF` |
| Dark | `#242629` | `#FFFFFF` | `#85D1B0` |

This repository was completed incrementally with focused commits for each learning step.
