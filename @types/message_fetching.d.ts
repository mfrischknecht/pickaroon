import { ListState, State } from './state';
import Disposable from './disposable';
import { MessageBus } from './message_bus';
import { States } from './app_states';
export interface Factories {
    messages: () => ListState<any>;
    fetchingCodeJs: () => State<string>;
}
export declare class MessageFetching implements Disposable {
    private readonly _fetchMessagesSubscription;
    private readonly _messages;
    private readonly _fetchingCodeJs;
    private readonly _fetchingCodeListener;
    private _javascript;
    private _fetch;
    constructor(states: States, messageBus: MessageBus);
    dispose(): void;
    private updateModule;
    private fetchMessages;
}
export declare let fetchMessagesSignal: (messageBus: MessageBus) => () => void;
