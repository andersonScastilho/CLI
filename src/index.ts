import inquirer from 'inquirer';

//Question
import { questions } from 'questions';

//Interface
import { IAnswers } from 'interfaces/answer.interface';
import { GenFile } from 'controller/generate.controller';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answer: IAnswers) => {
      GenFile.gen(answer);
    });
  }
}

new Init();
