import { ComponentContainer, JsonValue } from 'golden-layout';
import { States } from '../../app_states';
import '../../extensions/golden-layout';
export declare let init: (states: States) => (container: ComponentContainer, _: JsonValue) => Promise<void>;
