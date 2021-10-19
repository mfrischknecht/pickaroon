import Disposable from './disposable';
import { MessageBus } from './message_bus';
import { States } from './app_states';
export interface DroppedFile {
    name: string;
    type: string;
    size: number;
    sizeText: string;
    text: () => Promise<string>;
    stream: () => ReadableStream<any>;
}
export declare type DroppedFiles = {
    [name: string]: DroppedFile;
};
export declare class MessageFetching implements Disposable {
    private readonly _fetchMessagesSubscription;
    private readonly _libraries;
    private readonly _messages;
    private readonly _additionalData;
    private readonly _fetchingCodeJs;
    private readonly _droppedFiles;
    private readonly _fetchingCodeListener;
    private _javascript;
    private _fetch;
    constructor(states: States, messageBus: MessageBus);
    dispose(): void;
    private updateModule;
    private fetchMessages;
    private getFiles;
}
export declare let fetchMessagesSignal: (messageBus: MessageBus) => () => void;
