# Contributing to Clinic Chat Helper

Thank you for your interest in contributing to Clinic Chat Helper! We welcome contributions from the community.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or bun package manager
- Git

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/clinic-chat-helper.git
   cd clinic-chat-helper
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- If not, create a new issue with a clear title and description
- Include steps to reproduce the bug
- Add screenshots if applicable
- Mention your environment (OS, browser, Node version)

### Suggesting Enhancements

- Open an issue with the label "enhancement"
- Clearly describe the feature and its benefits
- Explain why this enhancement would be useful

### Pull Requests

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly

4. **Commit your changes** with a clear message:
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with..."
   ```

5. **Push to your fork**:
   ```bash
   git push origin your-branch-name
   ```

6. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to any related issues (e.g., "Fixes #123")

## Coding Standards

### TypeScript/React Guidelines

- Use TypeScript for all new files
- Follow React best practices and hooks guidelines
- Use functional components over class components
- Properly type all props and state

### Code Style

- Follow the existing code style in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Run ESLint before committing:
  ```bash
  npm run lint
  # or
  bun run lint
  ```

### Component Structure

- Place reusable UI components in `src/components/ui/`
- Place page-level components in `src/components/`
- Place page routes in `src/pages/`
- Use custom hooks in `src/hooks/`

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Ensure responsive design for mobile, tablet, and desktop

## Commit Message Guidelines

We follow conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add user authentication modal
fix: resolve chatbot response delay
docs: update installation instructions
```

## Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

## Questions?

Feel free to open an issue for any questions or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
