import { States } from "./app_states";
import Disposable from "./disposable";
export declare type Theme = 'light' | 'dark';
export declare type Scheme = 'auto' | Theme;
export declare class ActiveTheme implements Disposable {
    private readonly _preferredColorScheme;
    private readonly _activeTheme;
    private readonly _mediaQuery;
    private readonly _colorSchemeListener;
    private readonly _mediaQueryListener;
    constructor(states: States);
    dispose(): void;
    private updateActiveTheme;
}
