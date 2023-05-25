import inquirer from 'inquirer';

//Question
import { questions } from 'questions';

//Interface
import { IAnswers } from 'interfaces/answer.interface';

class Init {
  constructor() {
    inquirer.prompt(questions).then((answer: IAnswers) => {
      console.log(answer);
    });
  }
}

new Init();
