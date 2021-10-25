import { MessageBus } from '../../message_bus';
import { States } from '../../app_states';
import { LogEntry } from '../../log';
import { State } from '../../state';
import { ComponentContainer, JsonValue } from 'golden-layout';
export interface Factories {
    selectedLog: () => State<LogEntry[]>;
}
export declare let init: (states: States, messageBus: MessageBus) => (container: ComponentContainer, _: JsonValue) => void;
