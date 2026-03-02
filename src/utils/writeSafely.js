import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs-extra";

export const writeSafely = async (pathToWrite, content, filePathExists) => {
    const exists = await fs.pathExists(filePathExists);
    if (exists) {
        const overwrite = await inquirer.prompt([{
            type: 'confirm',
            name: 'overwrite',
            message: chalk.yellow(`File already exists: ${chalk.white(filePathExists)}. Do you want to overwrite it?`),
            default: false
        }]);

        if (!overwrite.overwrite) {
            console.log(chalk.blue('\n Operation canceled'));
            return false;
        }
    }
    await fs.outputFile(pathToWrite, content.trim());
    console.log(chalk.green(`\n Create in: ${chalk.white(filePathExists)}`));
    return true
}
export default writeSafely;
