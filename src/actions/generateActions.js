import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import templates from '../templates/templates.js';
import { ALIAS_MAP, FOLDER_MAP, TYPE_CHOICES } from '../config/constants.js';

export const generateActions = async (type, pathArg) => {

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
    const finalFolder = path.join(targetBaseDir, subFolder);

    const extension = selectedType === 'component' ? 'tsx' : 'ts';
    const filePath = path.join(finalFolder, `${baseName}.${extension}`);

    // --- GENERATION ---
    try {
        if (typeof templates[selectedType] !== 'function') {
            throw new Error(`There is no template for: ${selectedType}`);
        }

        const exists = await fs.pathExists(filePath);
        if (exists) {
            const overwrite = await inquirer.prompt([{
                type: 'confirm',
                name: 'overwrite',
                message: chalk.yellow(`File already exists: ${chalk.white(filePath)}. Do you want to overwrite it?`),
                default: false
            }]);

            if (!overwrite.overwrite) {
                console.log(chalk.blue('\n Operation canceled'));
                return;
            }
        }

        await fs.ensureDir(finalFolder);
        const content = templates[selectedType](baseName);
        await fs.writeFile(filePath, content.trim());

        console.log(chalk.green(`\n Create in: ${chalk.white(filePath)}`));
    } catch (err) {
        console.error(chalk.red('\n Error:'), err.message);
    }
}