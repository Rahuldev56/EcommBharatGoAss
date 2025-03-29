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
- **Deployment:** netlify

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
- Git

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rahuldev56/bharatgo.git
   cd bharatgo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the project root with the following variables:
   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Create a Firestore database
4. Get your Firebase configuration from Project Settings
5. Add the configuration to your `.env` file

## Available Pages

- `/` - Home page
- `/products` - Products listing
- `/products/:id` - Product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/auth` - Authentication page

## Development Guidelines

1. **Code Style:**
   - Follow TypeScript best practices
   - Use functional components with hooks
   - Implement proper error handling
   

2. **Git Workflow:**
   - Create feature branches from main
   - Use meaningful commit messages
   - Create pull requests for review

3. **Testing:**
   - Test components before committing
   - Ensure responsive design works
   - Verify all features work as expected

## Troubleshooting

1. **Node.js Version Issues:**
   - Use Node.js v14 or higher
   - Use `nvm` to manage Node.js versions

2. **Build Issues:**
   - Clear `node_modules` and reinstall
   - Check for TypeScript errors
   - Verify environment variables

3. **Development Server Issues:**
   - Check port availability
   - Verify all dependencies are installed
   - Check for environment variable errors
