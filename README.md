# ⚛️ react-isr-cli

<p align="center">
<img src="https://img.shields.io/badge/node-%3E%3D16-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="License" />
</p>

## 🎯 The Vision

**`react-isr-cli`** is a command-line interface inspired by the Angular CLI philosophy, tailored for React projects. Its primary goal is to facilitate the creation of structured and consistent codebases, reducing manual setup and repetitive boilerplate.

This is a **community-driven project** aimed at establishing a standard scaffolding workflow for React. It currently supports generating:

* **Feature Structures**: Scaffolds a complete module (Hooks, Services, Routes).
* **React Components**: Standardized components with Tailwind or CSS support.
* **Services (Axios/Fetch)**: Dedicated layer for HTTP requests and logic.
* **Interfaces (TypeScript)**: Data models and API contract definitions.

---

## 🛠️ Available Commands & Aliases

Commands are designed to be concise. You can use the full name or the alias:

| Alias | Full Command | Description |
| :--- | :--- | :--- |
| **feature** | `feature` | Generate a complete feature structure |
| **c** | `component` | Generate a standard React component |
| **ct** | `componenttailwind` | Generate a component with Tailwind CSS |
| **ccss** | `componentcss` | Generate a component with standard CSS |
| **i** | `interface` | Generate a TypeScript interface |
| **sf** | `servicef` | Generate a service using Fetch API |
| **sa** | `servicea` | Generate a service using Axios |

---

## 📂 Output Example

When you run the commands, the CLI creates the files following a clean path structure:

```bash
# Example output for a user feature:
Create in: src/features/user/user.component.tsx
Create in: src/features/user/user.service.ts
Create in: src/features/user/user.hook.ts
Create in: src/features/user/user.routes.ts
Create in: src/features/user/user.interface.ts
```
> **The Goal**: Speed up the development lifecycle while maintaining a 100% consistent codebase across teams and projects.

> Currently, this is a minimal viable version, but it is designed to evolve to support full feature scaffolding in the future.

---

## ⚡ Getting Started

You can install it globally or use it directly with `npx`:

```bash
# Global installation
npm install -g react-isr-cli

# Use it without installing
npx react-isr-cli

```

---

## 💻 Requirements

- Node.js ≥ 16
- npm

---

## 🚀 Upcoming Features (Roadmap)

We are working on making the CLI more interactive and intelligent. Future updates will include:

* **Interactive Entity Generator**: A guided terminal prompt (similar to Symfony) to define interfaces by asking for property names and types one by one.
* **Smart Component Scaffolding**: Support for generating Barrel files (`index.ts`) automatically.
* **Custom Blueprints**: Allow users to provide their own templates via a `.react-isr-config` file.
* **Interactive Menus**: A fully interactive UI using `inquirer` or `prompts` to choose what to generate without remembering commands.

---

