import { MessageBus } from './message_bus';
import { LogEntry } from './log';
import { TransformedMessage } from './message_transformation';
import { State, ListState } from './state';
import Disposable from './disposable';
export interface States {
    messages: ListState<any>;
    transformedMessages: ListState<TransformedMessage>;
    rawLogs: ListState<LogEntry[]>;
    selectedMessageIndex: State<number>;
    selectedSourceMessage: State<any>;
    selectedTransformedMessage: State<any>;
    selectedLog: State<LogEntry[]>;
    transformationCodeTs: State<string>;
    transformationCodeJs: State<string>;
    fetchingCodeTs: State<string>;
    fetchingCodeJs: State<string>;
}
export default class StateBroadcast implements Disposable {
    private readonly MESSAGE_TYPE;
    private readonly _isAuthority;
    private readonly _messages;
    private readonly _states;
    private readonly _messageSubscription;
    private readonly _changeListeners;
    constructor(isAuthority: boolean, messageBus: MessageBus, states: States);
    dispose(): void;
    private onMessage;
    private sendSnapshot;
    private sendStateValue;
    private sendListStateLength;
    private sendListStateItem;
    private requestSnapshot;
}
