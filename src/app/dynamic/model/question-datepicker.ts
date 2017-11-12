import { QuestionBase } from './question-base';

export class DatepickerQuestion extends QuestionBase<string> {
  controlType = 'datepicker';
  minDate: Date;
  maxDate: Date;
  startAt: Date;


  constructor(options: {} = {}) {
    super(options);
    this.minDate = options['minDate'] || null;
    this.maxDate = options['maxDate'] || null;
    this.startAt = options['startAt'] || null;
  }
}

