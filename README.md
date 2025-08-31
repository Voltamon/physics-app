# Physics App - B.Tech 1st Year

A digital learning platform for B.Tech 1st Year Physics students at IEM/UEM.

## Setup & Development

### Prerequisites
- Node.js >=18.0.0
- Bun runtime

### Installation & Running

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start development server:**
   ```bash
   bun run dev
   ```
   The app will be available at http://localhost:3000

3. **Build for production:**
   ```bash
   bun run build
   ```

4. **Preview production build:**
   ```bash
   bun run preview
   ```

5. **Type checking:**
   ```bash
   bun run lint
   ```

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 6
- **Runtime**: Bun
- **UI Components**: Radix UI

## Project Structure

```
├── components/          # Reusable UI components
├── lib/                # Utility functions
├── assets/             # Static assets (images, documents)
├── public/             # Public static files
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run TypeScript type checking

## Configuration

- **Vite Config**: `vite.config.ts` - Build and development server configuration
- **TypeScript**: `tsconfig.json` - TypeScript compiler options
- **Environment**: `.env.development` - Development environment variables