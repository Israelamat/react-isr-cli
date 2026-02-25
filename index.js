#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import templates from './templates/templates.js';
import { ALIAS_MAP, FOLDER_MAP, TYPE_CHOICES } from './config/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
    .version('1.0.0')
    .description('react-isr-cli');

program
    .command('g [type] [path]')
    .alias('generate')
    .action(async (type, pathArg) => {

        let selectedType = ALIAS_MAP[type] || type;
        let inputPath = pathArg;

        // If no type is provided, ask the user
        if (!selectedType) {
            const answers = await inquirer.prompt([{
                type: 'list',
                name: 'type',
                message: '¿What do u want to generate?',
                choices: TYPE_CHOICES
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
        const folderMap = FOLDER_MAP;

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
