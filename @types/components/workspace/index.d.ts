import Disposable from '../../disposable';
import Event from '../../event';
export interface MenuBarButton {
    type: 'button';
    text: string;
    onclick: () => void;
}
export interface MenuBarSeparator {
    type: 'separator';
}
export interface MenuBarComponent {
    type: 'component';
    init: (element: HTMLElement) => void;
}
export declare type MenuBarItem = MenuBarButton | MenuBarSeparator | MenuBarComponent;
declare class MenuGroup {
    private readonly _element;
    private readonly _menuBarItems;
    constructor(element: HTMLElement);
    addMenuBarItem(item: MenuBarItem): void;
    clearItems(): void;
}
declare type MenuBarPosition = 'top' | 'bottom' | 'left' | 'right';
declare class MenuBar implements Disposable {
    readonly visibilityChanged: Event<boolean>;
    private _visible;
    private readonly _resizeObserver;
    private readonly _position;
    private readonly _element;
    private readonly _groups;
    constructor(element: HTMLElement, position: MenuBarPosition);
    dispose(): void;
    get visible(): boolean;
    set visible(visible: boolean);
    get groups(): MenuGroup[];
    addGroup(): MenuGroup;
    private adjustDimensionsToScrollbars;
}
declare class MenuBars {
    readonly top: MenuBar;
    readonly bottom: MenuBar;
    readonly left: MenuBar;
    readonly right: MenuBar;
    constructor(bars: {
        top: MenuBar;
        bottom: MenuBar;
        left: MenuBar;
        right: MenuBar;
    });
}
export default class Workspace implements Disposable {
    private readonly _root;
    private readonly _workArea;
    private readonly _corners;
    readonly menubars: MenuBars;
    constructor(root: HTMLElement);
    dispose(): void;
    get workAreaElement(): HTMLElement;
}
export {};
