import { TypescriptSourceMapsRegistry } from './typescript';
import { MessageBus } from './message_bus';
import { States } from './app_states';
import Disposable from './disposable';
export declare class LibraryFetching implements Disposable {
    private readonly _query;
    private readonly _libraries;
    private readonly _fetchingCodeJs;
    private readonly _droppedFiles;
    private readonly _messageBus;
    private readonly _sourceMapRegistry;
    private readonly _fetchingCodeListener;
    private readonly _fetchLibrariesSubscription;
    private _sourcemaps;
    private _javascript;
    private _fetch;
    constructor(states: States, messageBus: MessageBus, sourcemaps: TypescriptSourceMapsRegistry);
    dispose(): void;
    private updateModule;
    private fetchMessages;
    private getFiles;
}
export declare let fetchLibrariesSignal: (messageBus: MessageBus) => () => Promise<void>;
