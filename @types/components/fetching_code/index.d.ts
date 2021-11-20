import { ComponentContainer, JsonValue } from 'golden-layout';
import { States } from '../../app_states';
import { State } from '../../state';
import '../../extensions/golden-layout';
export declare let init: (states: States, tsCode: State<string>) => (container: ComponentContainer, _: JsonValue) => Promise<void>;
