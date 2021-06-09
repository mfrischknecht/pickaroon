import { States } from "./app_states";
import Disposable from "./disposable";
import { EditorBindings } from "./monaco";
import { Scheme } from "./theme";
export interface Settings {
    editorBindings: EditorBindings;
    preferredColorScheme: Scheme;
}
export declare const defaultSettings: Settings;
export declare class ApplicationSettings implements Disposable {
    private readonly _states;
    private _settings;
    private _storageListener;
    private _editorBindingsListener;
    private _colorSchemeListener;
    constructor(states: States);
    dispose(): void;
    private loadSettings;
    private updateStates;
    private updateSettings;
}
