# BharatGo E-Commerce Platform

BharatGo is a modern e-commerce platform built with React, TypeScript, and Vite. The project features a responsive frontend with state management using Zustand and styling with Tailwind CSS.

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Authentication:** Firebase & Supabase
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```
project/
├── src/
│   ├── components/    # Reusable UI components
│   ├── config/       # Configuration files
│   ├── pages/        # Page components
│   ├── store/        # Zustand state management
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Application entry point
│   └── index.css     # Global styles
├── public/           # Static assets
└── configuration files
    ├── package.json  # Project dependencies
    ├── tsconfig.json # TypeScript configuration
    ├── vite.config.ts # Vite configuration
    ├── tailwind.config.js # Tailwind CSS configuration
    └── vercel.json   # Vercel deployment configuration
```

## Features

- Modern and responsive user interface
- Type-safe development with TypeScript
- State management with Zustand
- Routing with React Router
- Authentication with Firebase & Supabase
- Styling with Tailwind CSS
- Optimized build with Vite
- Deployment ready for Vercel

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Rahuldev56/bharatgo.git
   cd bharatgo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
