Here’s an updated `README.md` for your project, including descriptions for all the dependencies as requested:

# React + Vite 3D Mac Project

This template provides a minimal setup for using **React** with **Vite**, featuring a 3D Mac model, hot module replacement (HMR), ESLint, and Tailwind CSS.

## Features

- **React 19** for building interactive UIs
- **Vite** for fast, modern build tooling and development server
- **Three.js** integration with `@react-three/fiber` for React-driven 3D scenes
- **@react-three/drei** for useful Three.js abstractions and helpers
- **Tailwind CSS** utility-first classes with seamless Vite integration
- **ESLint** and React-specific plugins for effective linting

## Getting Started

1. **Clone this repository.**
2. **Install dependencies**  
   ```
   npm install
   ```
3. **Start the development server**  
   ```
   npm run dev
   ```

## Scripts

- `dev`: Start the Vite development server
- `build`: Build the project for production
- `preview`: Preview the production build locally
- `lint`: Run ESLint checks

## Project Dependencies

| Package                | Description                                                               |
|------------------------|---------------------------------------------------------------------------|
| @react-three/drei      | Helpers and abstractions for Three.js in React via `@react-three/fiber`   |
| @react-three/fiber     | React renderer for Three.js, enabling declarative 3D with React           |
| @tailwindcss/vite      | Vite plugin for integrating Tailwind CSS quickly and efficiently          |
| @types/three           | TypeScript type definitions for Three.js (for editor/type safety)         |
| react                  | Main JavaScript library for building user interfaces                      |
| react-dom              | DOM-specific methods to render React components to the DOM                |
| tailwindcss            | Utility-first CSS framework for rapid, customizable UI development        |
| three                  | Core 3D graphics library for rendering WebGL scenes                       |

## Dev Dependencies

| Package                    | Description                                                              |
|----------------------------|--------------------------------------------------------------------------|
| @eslint/js                 | Official JavaScript configuration files for ESLint                       |
| @types/react               | TypeScript definitions for React (if using TypeScript)                   |
| @types/react-dom           | TypeScript definitions for ReactDOM (if using TypeScript)                |
| @vitejs/plugin-react       | Official React integration plugin for Vite (includes Fast Refresh)       |
| eslint                     | Pluggable linter for JavaScript/TypeScript code                          |
| eslint-plugin-react-hooks   | ESLint rules enforcing best practices for React Hooks                    |
| eslint-plugin-react-refresh | ESLint rules for React Fast Refresh support                             |
| globals                    | Provides recognized global variable lists for use in linting configs     |
| vite                       | Modern frontend build tool and dev server                                |

## Expanding the ESLint Configuration

If you’re developing a production application, consider using TypeScript with type-aware lint rules. See the [TypeScript template in Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more details on TypeScript integration and [`typescript-eslint`](https://typescript-eslint.io).

This template should help you quickly get started with 3D in React and modern tooling.
