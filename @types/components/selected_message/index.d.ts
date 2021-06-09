import { State } from '../../state';
import { ComponentContainer, JsonValue } from 'golden-layout';
import { TransformedMessage } from '../../message_transformation';
import { States } from '../../app_states';
export interface StateFactories {
    selectedSourceMessage: () => State<any>;
    selectedTransformedMessage: () => State<TransformedMessage>;
}
export declare let init: (states: States) => (container: ComponentContainer, _: JsonValue) => void;
