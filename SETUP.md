# Setup Guide

This guide will help you set up the Clinic Chat Helper project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js) or **Bun**
  - npm verify: `npm --version`
  - Bun installation: `curl -fsSL https://bun.sh/install | bash`

- **Git**
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## Installation Steps

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/clinic-chat-helper.git

# Navigate to the project directory
cd clinic-chat-helper
```

### 2. Install Dependencies

Choose one of the following package managers:

**Using npm:**
```bash
npm install
```

**Using Bun (recommended for this project):**
```bash
bun install
```

### 3. Start the Development Server

**Using npm:**
```bash
npm run dev
```

**Using Bun:**
```bash
bun dev
```

The application will start on `http://localhost:5173` (default Vite port).

### 4. Build for Production

**Using npm:**
```bash
npm run build
```

**Using Bun:**
```bash
bun run build
```

The production-ready files will be generated in the `dist/` directory.

### 5. Preview Production Build

**Using npm:**
```bash
npm run preview
```

**Using Bun:**
```bash
bun run preview
```

## Project Structure

```
clinic-chat-helper/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── About.tsx   # About section component
│   │   ├── Chatbot.tsx # Chatbot component
│   │   ├── Contact.tsx # Contact section component
│   │   ├── Footer.tsx  # Footer component
│   │   ├── Header.tsx  # Header component
│   │   ├── Hero.tsx    # Hero section component
│   │   └── Services.tsx # Services section component
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .eslintrc.js        # ESLint configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## Available Scripts

- `npm run dev` / `bun dev` - Start development server
- `npm run build` / `bun run build` - Build for production
- `npm run preview` / `bun run preview` - Preview production build
- `npm run lint` / `bun run lint` - Run ESLint

## Technology Stack

- **React** - Frontend library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **ShadCN UI** - Component library

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a custom port:

```bash
npm run dev -- --port 3000
```

### Installation Errors

If you encounter dependency installation errors:

1. Delete `node_modules/` folder and lock files:
   ```bash
   rm -rf node_modules package-lock.json bun.lockb
   ```

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

3. Reinstall dependencies:
   ```bash
   npm install
   ```

### TypeScript Errors

If you see TypeScript errors, ensure your IDE is using the workspace TypeScript version:

- **VS Code**: Press `Ctrl+Shift+P` → "TypeScript: Select TypeScript Version" → "Use Workspace Version"

## Development Tips

- Hot Module Replacement (HMR) is enabled - changes will reflect immediately
- TypeScript errors will show in the terminal and browser console
- ESLint will check code quality on save (if configured in your IDE)
- Use browser DevTools for debugging React components

## Getting Help

- Check existing [Issues](https://github.com/YOUR_USERNAME/clinic-chat-helper/issues)
- Read the [Contributing Guide](CONTRIBUTING.md)
- Create a new issue if you encounter problems

## Next Steps

After setup, you can:

1. Explore the codebase
2. Make changes and see them live
3. Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
4. Start developing new features or fixing bugs

Happy coding! 🚀
