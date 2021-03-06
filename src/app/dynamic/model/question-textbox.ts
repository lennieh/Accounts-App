import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  case?: string;
  regex?: RegExp;
  isPostcode?: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.minLength = options['minLength'] || null;
    this.maxLength = options['maxLength'] || null;
    this.minValue = options['minValue'] !== null ? options['minValue'] : null;
    this.maxValue = options['maxValue'] || null;
    this.case = options['case'] || null;
    this.regex = options['regex'] ? new RegExp(options['regex']) : null;
    this.isPostcode = options['isPostCode'] || false;
  }
}
