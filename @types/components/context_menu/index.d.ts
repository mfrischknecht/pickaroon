export interface MenuOption {
    type: 'option';
    text: string;
    onclick: () => void;
}
export interface MenuSeparator {
    type: 'separator';
}
export declare type MenuEntry = MenuOption | MenuSeparator;
export declare type Position = {
    x: number;
    y: number;
};
export default function (position: Position, entries: MenuEntry[]): void;
