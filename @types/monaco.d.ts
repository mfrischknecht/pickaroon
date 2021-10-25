import * as monaco from 'monaco-editor';
import { State } from './state';
import { States } from './app_states';
import Disposable from './disposable';
export declare type EditorBindings = 'normal' | 'vim';
export declare function initialize(): void;
export declare class MonacoTheme implements Disposable {
    private readonly _states;
    private readonly _stateListener;
    constructor(states: States);
    dispose(): void;
    private setTheme;
}
export declare class EditorBindingToggles implements Disposable {
    private readonly _states;
    private readonly _bindingsListener;
    constructor(states: States);
    dispose(): void;
    private onChange;
}
export declare class VimMode implements Disposable {
    private readonly _enabled;
    private readonly _enabledListener;
    private readonly _editor;
    private readonly _statusBar;
    private _vimMode;
    constructor(enabled: State<boolean>, editor: monaco.editor.IStandaloneCodeEditor, statusBar?: HTMLElement);
    dispose(): void;
    private onStateChange;
}
