import * as GoldenLayout from 'golden-layout';
import { States } from './app_states';
import Disposable from './disposable';
export declare function loadConfigFromLocation(): Promise<any>;
export declare function generateConfigUrl(config: any): Promise<string>;
export declare function serializeConfig(layout: GoldenLayout.GoldenLayout, states: States): {
    layout: GoldenLayout.LayoutConfig;
    code: {
        fetching: string;
        transformation: string;
        scratchpad: {
            [key: string]: string;
        };
    };
};
export declare class UpdateUrlHash implements Disposable {
    private readonly _layout;
    private readonly _states;
    private readonly _fetchingChanges;
    private readonly _transformationChanges;
    private readonly _scratchpadChanges;
    constructor(layout: GoldenLayout.GoldenLayout, states: States);
    dispose(): void;
    private updateHash;
}
