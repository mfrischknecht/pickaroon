import { States } from '../../app_states';
import Disposable from '../../disposable';
import Event from '../../event';
import { DropTargetIndicator } from '../drop_target_indicator';
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
    set readOnly(readOnly: boolean);
    get readOnly(): boolean;
}
interface DiffOptions {
    leftContent?: string;
    rightContent?: string;
    language?: string;
}
export interface DiffEditorContent {
    left: string;
    right: string;
}
export declare class DiffEditor implements Disposable {
    private readonly _elements;
    private readonly _states;
    private readonly _editor;
    private readonly _leftModel;
    private readonly _rightModel;
    private readonly _leftVim;
    private readonly _rightVim;
    private _language;
    readonly onContentChange: Event<DiffEditorContent>;
    private readonly _leftContentListener;
    private readonly _rightContentListener;
    private readonly _bindingsListener;
    private readonly _leftDropTargets;
    private readonly _rightDropTargets;
    constructor(element: HTMLElement, states: States, options?: DiffOptions);
    dispose(): void;
    private registerDropTarget;
    registerLeftDropTarget(hintText: string, predicate: (event: DragEvent) => boolean, onDrop?: (event: DragEvent) => void): DropTargetIndicator;
    registerRightDropTarget(hintText: string, predicate: (event: DragEvent) => boolean, onDrop?: (event: DragEvent) => void): DropTargetIndicator;
    private updateBindings;
    get language(): string;
    set language(language: string);
    get content(): DiffEditorContent;
    set content(content: DiffEditorContent);
}
export {};
