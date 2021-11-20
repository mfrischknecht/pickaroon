import { ComponentContainer, JsonValue } from 'golden-layout';
import { MessageBus } from '../../message_bus';
import { States } from '../../app_states';
import '../../extensions/golden-layout';
export interface ComponentState {
    messageId?: string;
    detail?: string;
}
export declare let init: (states: States, messageBus: MessageBus) => (container: ComponentContainer, _: JsonValue) => Promise<void>;
