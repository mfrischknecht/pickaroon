import { ListState, State } from './state';
import { TransformedMessage } from './message_transformation';
import { LogEntry } from './log';
import Disposable from './disposable';
import { States } from './app_states';
export interface Factories {
    messages: () => ListState<any>;
    transformedMessages: () => ListState<TransformedMessage>;
    selectedMessageIndex: () => State<number>;
    selectedSourceMessage: () => State<any>;
    selectedTransformedMessage: () => State<any>;
    selectedLog: () => State<LogEntry[]>;
}
export declare class MessageSelection implements Disposable {
    private readonly _messages;
    private readonly _transformedMessages;
    private readonly _selectedMessageIndex;
    private readonly _selectedSourceMessage;
    private readonly _selectedTransformedMessage;
    private readonly _selectedLog;
    private readonly _messagesLengthListener;
    private readonly _messagesListener;
    private readonly _transformedLengthListener;
    private readonly _transformedListener;
    private readonly _selectionListener;
    constructor(states: States);
    dispose(): void;
    private updateSelection;
}
