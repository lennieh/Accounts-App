export class QuestionBase<T> {
    id: number;
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    hint: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        hint?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.hint = options.hint || '';
    }
  }
