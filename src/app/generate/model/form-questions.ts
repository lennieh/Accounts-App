import { QuestionBase }     from './question-base';

export class FormQuestions {
    id: number;
    formName: string;
    questions: QuestionBase<any>[];
}