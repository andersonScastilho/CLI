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
    name: 'techName',
    message: 'Qual nome devo dar para pasta do projeto?',
  },
];
