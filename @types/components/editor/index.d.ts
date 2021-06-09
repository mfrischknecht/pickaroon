import { States } from '../../app_states';
import Disposable from '../../disposable';
import Event from '../../event';
interface Options {
    content?: string;
    language?: string;
    readOnly?: boolean;
}
export default class Editor implements Disposable {
    private readonly _elements;
    private readonly _states;
    private readonly _model;
    private readonly _editor;
    private readonly _vim;
    private _language;
    readonly onContentChange: Event<string>;
    private readonly _contentListener;
    private readonly _bindingsListener;
    constructor(element: HTMLElement, states: States, options?: Options);
    dispose(): void;
    private updateBindings;
    get language(): string;
    set language(language: string);
    get content(): string;
    set content(content: string);
}
export {};
