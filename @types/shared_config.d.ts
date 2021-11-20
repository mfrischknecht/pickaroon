import { LayoutConfig } from 'golden-layout';
import { States } from './app_states';
import { Layout } from './layout';
import Disposable from './disposable';
import { MessageBus } from './message_bus';
export interface Config {
    layout: LayoutConfig;
    markedMessages: string[];
    messageNotes: {
        [id: string]: string;
    };
    code: {
        libraryFetching: string;
        dataFetching: string;
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
    private updateConfig;
}
export declare class UpdateUrlHash implements Disposable {
    private readonly _layout;
    private readonly _states;
    private readonly _messageBus;
    private readonly _queryChangeListener;
    private readonly _stateChangeListener;
    private readonly _libraryFetchingChanges;
    private readonly _dataFetchingChanges;
    private readonly _transformationChanges;
    private readonly _scratchpadChanges;
    private readonly _messageMarkerChanges;
    private readonly _messageNotesChanges;
    private readonly _configChangeSignal;
    constructor(layout: Layout, states: States, messageBus: MessageBus);
    dispose(): void;
    private updateAttempt;
    private updateHash;
}
export declare function loadConfigFromLocation(): any;
export declare let configChangedSignal: (messageBus: MessageBus) => () => void;
