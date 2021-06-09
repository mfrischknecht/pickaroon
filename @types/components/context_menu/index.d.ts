import { States } from '../../app_states';
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
export default function (states: States, position: Position, entries: MenuEntry[]): void;
