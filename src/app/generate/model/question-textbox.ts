import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  minLength?: number;
  maxLength?: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
  }
}
