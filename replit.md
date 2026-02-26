# Vite React App

## Overview
A frontend-only React application built with Vite, TypeScript, and Tailwind CSS. It uses shadcn/ui components (Radix UI primitives) and various other libraries for a rich UI experience.

## Architecture
- **Framework**: React + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI)
- **Routing**: React Router DOM
- **Animation**: Framer Motion
- **3D**: React Three Fiber / Drei

## Project Structure
- `src/` - Source code
  - `components/` - UI components (navbar, hero, footer, etc.)
  - `components/ui/` - shadcn/ui base components
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `App.tsx` - Main app component
  - `main.tsx` - Entry point
- `public/` - Static assets

## Development
- **Dev server**: `npm run dev` (port 5000)
- **Build**: `npm run build`

## Deployment
- **Type**: Static site
- **Build command**: `npm run build`
- **Public directory**: `dist`
