import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import templates from '../templates/templates.js';
import { ALIAS_MAP, FOLDER_MAP, TYPE_CHOICES } from '../config/constants.js';
import { generateComponents } from './generateComponents.js';

export const generateActions = async (type, pathArg) => {

    let selectedType = ALIAS_MAP[type] || type;

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
    if (!pathArg) {
        const answers = await inquirer.prompt([{
            type: 'input',
            name: 'path',
            message: '¿Where do u want to generate the file?',
            validate: (val) => val ? true : 'Name is required'
        }]);
        pathArg = answers.path;
    }

    const baseName = path.basename(pathArg);
    const subFolder = path.dirname(pathArg);

    const targetBaseDir = FOLDER_MAP[selectedType] || 'src';
    const finalFolder = path.join(targetBaseDir, subFolder);

    const extension = selectedType === 'component' ? 'tsx' : 'ts';
    const filePath = path.join(finalFolder, `${baseName}.${extension}`);

    // --- GENERATION ---
    try {
        if (typeof templates[selectedType] !== 'function') {
            throw new Error(`There is no template for: ${selectedType}`);
        }

        generateComponents(selectedType, baseName, finalFolder, filePath);

    } catch (err) {
        console.error(chalk.red('\n Error:'), err.message);
    }
}