export interface ICard {
    header: string;
    code: string;
    id: number;
    anchor: string;
    isInput: IsShowInput;
    // isTextarea?: boolean;
    text12?: string;
    text14?: string;
    text16?: string;
    text18?: string;
}
export const enum IsShowInput {
    INPUT = 'Input',
    TEXTAREA = 'Textarea',
    NONE = 'Hidden',
}
