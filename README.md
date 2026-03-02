#react-isr-cli

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D16-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/npm/v/@israelamat/react-isr-cli?style=for-the-badge&color=cb3837&logo=npm&logoColor=white" alt="npm version" />
</p>

## 🚀 What is it

**`react-isr-cli`** is a custom CLI for React projects that allows you to quickly generate **standardized files** such as:

- **Interfaces (TypeScript)**
- **Services (Axios/Fetch)**
- **React Components (Tailwind/CSS)**
- **Feature Structures** (Hooks, Services, Routes)

Its goal is to speed up development, maintain consistency across projects, and save time on repetitive tasks.

> Currently, this is a minimal viable version, but it is designed to evolve to support full feature scaffolding in the future.

---

## 💻 Requirements

- Node.js ≥ 16
- npm

---

## ⚡ Installation

You can install it globally or use it directly with `npx`:

```bash
# Global installation
npm install -g react-isr-cli

# Use it without installing
npx react-isr-cli

```

## 🛠️ Available Commands
Currently, the basic commands are:

```bash
# Generate a TypeScript interface
react-isr-cli generate interface /path/to/IExample.ts

# Generate a service
react-isr-cli generate service /path/to/example.service.ts

# Generate a React component
react-isr-cli generate component /path/to/ExampleComponent.tsx
```

## Example Usage

```bash 
# Generate a UserCard component inside /src/users/
npx react-isr-cli generate component /src/users/UserCard.tsx
