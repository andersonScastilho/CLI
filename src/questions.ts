import { EChoiceBoilerPlate } from 'enum/choices-boileplate.enum';

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

      return true;
    },
  },
];
