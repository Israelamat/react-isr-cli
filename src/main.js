#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateActions } from './actions/generateActions.js';
import { HELP_TEXT } from './config/constants.js';
import { LOGO } from './templates/logo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
    .version('1.0.0')
    .description('react-isr-cli');

program
    .command('g [type] [path]')
    .alias('generate')
    .action(generateActions)
    .helpInformation = () => HELP_TEXT;

program
    .addHelpText('before', () => {
        console.log(LOGO);
        return '';
    })

if (!process.argv.slice(2).length) {
    console.log(LOGO);
    program.outputHelp();
    process.exit(0);
}

program.parse(process.argv);
