import { State } from '../../state';
import { LogEntry } from '../../log';
import * as GoldenLayout from 'golden-layout';
import { States } from '../../app_states';
export interface Factories {
    selectedLog: () => State<LogEntry[]>;
}
export declare let init: (states: States) => (container: GoldenLayout.ComponentContainer, _: GoldenLayout.JsonValue) => void;
