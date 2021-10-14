import { LayoutConfig } from 'golden-layout';
import { States } from './app_states';
import Disposable from './disposable';
import { Layout } from './layout';
export interface Config {
    layout: LayoutConfig;
    code: {
        fetching: string;
        transformation: string;
        scratchpad: {
            [id: string]: string;
        };
    };
}
export declare class UpdateConfig implements Disposable {
    private readonly _layout;
    private readonly _states;
    private readonly _listener;
    constructor(layout: Layout, states: States);
    dispose(): void;
    private updateAttempt;
    private updateConfig;
}
export declare class UpdateUrlHash implements Disposable {
    private readonly _layout;
    private readonly _states;
    private readonly _fetchingChanges;
    private readonly _transformationChanges;
    private readonly _scratchpadChanges;
    private readonly _stateChangeListener;
    constructor(layout: Layout, states: States);
    dispose(): void;
    private updateAttempt;
    private updateHash;
}
export declare function loadConfigFromLocation(): Promise<any>;
