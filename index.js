#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Templates ---
const templates = {
    component: (name) => `
export const ${name} = () => {
  return (
    <div className="${name.toLowerCase()}">
      <h1>${name} Component</h1>
    </div>
  );
};
`,
    service: (name) => `
export const ${name}Service = {
  getAll: async () => {
    const response = await fetch('https://api.example.com/${name.toLowerCase()}');
    return await response.json();
  }
};
`,
    interface: (name) => `
export interface I${name} {
  id: number;
  name: string;
}
`
};
