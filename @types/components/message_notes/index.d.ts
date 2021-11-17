import { ComponentContainer, JsonValue } from 'golden-layout';
import { States } from '../../app_states';
import { MessageBus } from '../../message_bus';
export interface ComponentState {
    messageId: string | null;
}
export declare let init: (states: States, messageBus: MessageBus) => (container: ComponentContainer, _: JsonValue) => Promise<void>;
