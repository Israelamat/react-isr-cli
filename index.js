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

const logo = `
${chalk.cyan(' ██████╗ ███████╗ █████╗  ██████╗████████╗     ██╗███████╗██████╗ ')}
${chalk.cyan(' ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝     ██║██╔════╝██╔══██╗')}
${chalk.cyan(' ██████╔╝█████╗  ███████║██║        ██║        ██║███████╗██████╔╝')}
${chalk.cyan(' ██╔══██╗██╔══╝  ██╔══██║██║        ██║        ██║╚════██║██╔══██╗')}
${chalk.cyan(' ██║  ██║███████╗██║  ██║╚██████╗   ██║        ██║███████║██║  ██║')}
${chalk.cyan(' ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝        ╚═╝╚══════╝╚═╝  ╚═╝')}
${chalk.yellow('                      REACT-ISR-CLI v1.0.0')}
`;

// --- CLI ---
program
    .version('1.0.0')
    .description('react-isr-cli');

program
    .command('g [type] [path]')
    .alias('generate')
    .action(async (type, pathArg) => {
        let selectedType = type;
        let inputPath = pathArg;

        // If no type is provided, ask the user
        if (!selectedType) {
            const answers = await inquirer.prompt([{
                type: 'list',
                name: 'type',
                message: '¿What do u want to generate?',
                choices: [
                    { name: 'Component', value: 'component' },
                    { name: 'Service', value: 'service' },
                    { name: 'Interface', value: 'interface' }
                ]
            }]);
            selectedType = answers.type;
        }

        //Only ask the path if no path is provided
        if (!inputPath) {
            const answers = await inquirer.prompt([{
                type: 'input',
                name: 'path',
                message: '¿Where do u want to generate the file?',
                validate: (val) => val ? true : 'Name is required'
            }]);
            inputPath = answers.path;
        }

        // --- INTELIGENCE PATH ---
        const baseName = path.basename(inputPath);
        const subFolder = path.dirname(inputPath);
        const folderMap = {
            component: 'src/components',
            service: 'src/services',
            interface: 'src/interfaces'
        };

        // Build the final path + subfolder 
        const targetBaseDir = folderMap[selectedType] || 'src';
        const finalFolder = path.join(process.cwd(), targetBaseDir, subFolder);

        const extension = selectedType === 'component' ? 'tsx' : 'ts';
        const filePath = path.join(finalFolder, `${baseName}.${extension}`);

        // --- GENERATION ---
        try {
            if (typeof templates[selectedType] !== 'function') {
                throw new Error(`There is no template for: ${selectedType}`);
            }

            await fs.ensureDir(finalFolder);
            const content = templates[selectedType](baseName);
            await fs.writeFile(filePath, content.trim());

            console.log(chalk.green(`\n Create in: ${chalk.white(filePath)}`));
        } catch (err) {
            console.error(chalk.red('\n Error:'), err.message);
        }
    });

program.parse(process.argv);
