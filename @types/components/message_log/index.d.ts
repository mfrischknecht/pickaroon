import { MessageBus } from '../../message_bus';
import { States } from '../../app_states';
import { ComponentContainer, JsonValue } from 'golden-layout';
export interface ComponentState {
    messageId: string | null;
}
export declare let init: (states: States, messageBus: MessageBus) => (container: ComponentContainer, _: JsonValue) => Promise<void>;
