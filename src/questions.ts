import { EChoiceBoilerPlate } from 'enum/choices-boileplate.enum';
import path from 'node:path';
import fs from 'node:fs';

export const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar ?',
    choices: [EChoiceBoilerPlate.NODEJS_TS, EChoiceBoilerPlate.SCSS],
  },
  {
    type: 'input',
    name: 'folderName',
    message: 'Qual nome devo dar para pasta do projeto?',
    validate(folderName: string) {
      if (!folderName) return 'Insirá um valor para o nome do projeto!';

      if (/[^\w\s-]/.test(folderName))
        return 'Não pode conter caracteres especiais';

      if (
        folderName === 'BoilerPlateNodeTypescript' ||
        folderName === 'BoilerPlateScss'
      )
        return 'Não é possivel criar a pasta com esse nome';

      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return 'Ja existe uma pasta com este nome!';
      } catch (error) {}

      return true;
    },
  },
];
