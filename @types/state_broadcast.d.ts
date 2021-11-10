import { MessageBus } from './message_bus';
import { States } from './app_states';
import Disposable from './disposable';
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
    private sendDictionaryStateItem;
    private requestSnapshot;
}
