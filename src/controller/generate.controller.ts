import shelljs from 'shelljs';
import fs from 'node:fs';
import path from 'node:path';

import { IAnswers } from 'interfaces/answer.interface';

import { EChoiceBoilerPlate } from 'enum/choices-boileplate.enum';
import { EGitName } from 'enum/git-name.enum';

class GenerateController {
  public gen(answer: IAnswers) {
    try {
      switch (answer.tech) {
        case EChoiceBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answer.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  private _execPath(gitName: string, folderName: string) {
    try {
      shelljs.cd(path.resolve());
      shelljs.exec(
        `git clone https://github.com/andersonScastilho/${gitName}.git`,
      );

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      console.log('Arquivo criado com sucesso');
      return shelljs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}
export const GenFile = new GenerateController();
