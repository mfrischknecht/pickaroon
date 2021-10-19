import { ListState, State } from './state';
import { LogEntry } from './log';
import { MessageBus } from './message_bus';
import Disposable from './disposable';
import { States } from './app_states';
export interface MessageDetail {
    language: string;
    content: string;
}
export interface TransformedMessage {
    original: string;
    text?: string;
    log: LogEntry[];
    details: {
        [name: string]: MessageDetail;
    };
}
export interface Factories {
    messages: () => ListState<any>;
    transformedMessages: () => ListState<TransformedMessage>;
    rawLogs: () => ListState<LogEntry[]>;
    transformationCodeJs: () => State<string>;
    selectedMessageIndex: () => State<number>;
}
export declare class MessageTransformation implements Disposable {
    private readonly _publishLogSubscription;
    private readonly _messages;
    private readonly _additionalData;
    private readonly _transformedMessages;
    private readonly _rawLogs;
    private readonly _transformationCode;
    private readonly _selectedMessageIndex;
    private readonly _libraryModules;
    private readonly _messagesLengthListener;
    private readonly _messagesListener;
    private readonly _transformationListener;
    private readonly _libraryModulesListener;
    private _javascript;
    private _transformation;
    constructor(states: States, messageBus: MessageBus);
    dispose(): void;
    private updateModule;
    private publishRawLogEntry;
    private updateMessages;
    private runNonMessageTransform;
    private _transformationStart;
    private transformMessages;
    private transformMessage;
    private makeLogEntriesSerializable;
}
export declare let exportLogEntrySignal: (messageBus: MessageBus) => (entry: number) => void;
