# Evergreen AI Assignment

A responsive chat interface for **Evergreen AI** — an AI-powered financial advisor replica of Bill Harris. Users can ask financial questions via suggested prompts or free-text input, with a split-panel layout (chat + profile) on desktop and a stacked view on mobile.

## Tech Stack

- **React 19** — UI library
- **TypeScript 5.9** — type-safe JavaScript
- **Vite 8** — build tool & dev server
- **Tailwind CSS 4** — utility-first styling
- **ESLint & Prettier** — linting and formatting

## Project Structure

```
src/
├── assets/              # Images and SVG icons
├── components/
│   ├── ChatSection.tsx  # Chat UI with suggested questions and input
│   └── ProfileSection.tsx # Profile card for Bill Harris
├── App.tsx              # Root layout (mobile + desktop)
├── index.css            # Global styles and Tailwind imports
└── main.tsx             # App entry point
```

## Prerequisites

- **Node.js** >= 18
- **npm** (comes with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:caroline537/nayab.git
cd nayab
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script             | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start the Vite dev server with HMR |
| `npm run build`    | Type-check and build for production |
| `npm run preview`  | Preview the production build       |
| `npm run lint`     | Run ESLint                         |
| `npm run format`   | Format code with Prettier          |
| `npm run format:check` | Check formatting without writing |
