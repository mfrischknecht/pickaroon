import { ComponentItemConfig, GoldenLayout, LayoutConfig, JsonValue, DragSource } from "golden-layout";
import { MessageBus } from "./message_bus";
import { ReadOnlyEvent } from "./event";
import Disposable from "./disposable";
export declare function getLayoutConfig(layout: GoldenLayout): LayoutConfig;
export declare function iterateComponents(config: LayoutConfig): Generator<ComponentItemConfig>;
export declare function registerLayoutComponent(name: string, constructor: any): void;
export declare class Layout implements Disposable {
    private readonly _resizeObserver;
    private readonly _element;
    private readonly _messageBus;
    private _layout;
    private readonly _onStateChange;
    private readonly _onConfigChange;
    private _stateChangeListener;
    constructor(element: HTMLElement, config: LayoutConfig);
    dispose(): void;
    get messageBus(): MessageBus;
    get isSubWindow(): boolean;
    get config(): LayoutConfig;
    /** Tries to access the layout's config in a retry loop.
     *  Layout config access attempts can fail if the layout is currently initializing
     *  a new popout window. `getConfig()` will catch such errors and retry automatically
     *  for a specified amount of retries.
     */
    getConfig(numRetries?: number): Promise<LayoutConfig>;
    get onStateChange(): ReadOnlyEvent<void>;
    get onConfigChange(): ReadOnlyEvent<void>;
    changeConfig(config: LayoutConfig): void;
    newDragSource(element: HTMLElement, componentTypeOrFtn: JsonValue | (() => DragSource.ComponentItemConfig), componentState?: JsonValue, title?: string): DragSource;
    private onResize;
}
