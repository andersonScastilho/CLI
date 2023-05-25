import inquirer from 'inquirer';

import { IAnswers } from 'interfaces/answer.interface';

const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual Boilerplate devo criar ?',
    choices: ['NodeJs + Typescript', 'Scss'],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Qual nome devo dar para pasta do projeto?',
  },
];

class Init {
  constructor() {
    inquirer.prompt(questions).then((answer: IAnswers) => {
      console.log(answer);
    });
  }
}

new Init();
