export interface MenuOption {
    type: 'option';
    text: string;
    onclick: () => void;
}
export interface MenuSeparator {
    type: 'separator';
}
export type MenuEntry = MenuOption | MenuSeparator;
export type Position = {
    x: number;
    y: number;
};
export default function (position: Position, entries: MenuEntry[]): void;
