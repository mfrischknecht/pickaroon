import { TypescriptSourceMapsRegistry } from './typescript';
import { LogEntry } from './log';
import { ListState, State } from './state';
import { LogText, MessageDetail } from './static_declarations';
import { MessageBus } from './message_bus';
import { States } from './app_states';
import Disposable from './disposable';
export interface TransformedMessage {
    id: string;
    original: string;
    text?: LogText;
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
    private readonly _messages;
    private readonly _messageNotes;
    private readonly _transformedMessages;
    private readonly _rawLogs;
    private readonly _additionalData;
    private readonly _transformationCode;
    private readonly _selectedMessageIndex;
    private readonly _libraryModules;
    private readonly _messageBus;
    private readonly _sourceMapRegister;
    private readonly _publishLogSubscription;
    private readonly _messagesLengthListener;
    private readonly _messagesListener;
    private readonly _notesListener;
    private readonly _transformationListener;
    private readonly _libraryModulesListener;
    private _sourcemaps;
    private _javascript;
    private _transformation;
    private _mockConsole;
    constructor(states: States, messageBus: MessageBus, sourcemaps: TypescriptSourceMapsRegistry);
    dispose(): void;
    private _moduleUpdateRun;
    private _lastModuleUpdateRun;
    private updateModule;
    private publishRawLogEntry;
    private _updateAttempt;
    private _update;
    private updateMessages;
    private transformMessages;
    private runNonMessageTransform;
    private transformMessage;
    private cleanUpOldMessageData;
    private makeLogEntriesSerializable;
    private compileTransformationModule;
}
export declare let exportLogEntrySignal: (messageBus: MessageBus) => (entry: number) => Promise<void>;
