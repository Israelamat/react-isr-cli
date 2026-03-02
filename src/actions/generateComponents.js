import templates from '../templates/templates.js';
import path from 'path';
import { writeSafely } from '../utils/writeSafely.js';

export const generateComponents = async (selectedType, baseName, finalFolder, filePath) => {

    const templateResult = templates[selectedType](baseName);
    let filesToWrite = [];

    if (templateResult.files) {
        filesToWrite = templateResult.files.map(f => ({
            path: path.join(finalFolder, f.name),
            content: f.content
        }))
    } else {
        const ext = selectedType.startsWith('c') ? 'tsx' : 'ts';
        filesToWrite = [{
            path: path.join(finalFolder, `${baseName}.${ext}`),
            content: templateResult
        }]
    }

    for (const file of filesToWrite) {
        await writeSafely(file.path, file.content, filePath);
    }
}

export default generateComponents;