import Disposable from '../../disposable';
import Event from '../../event';
interface LabeledOption {
    label: string;
    value: string;
}
type Option = string | LabeledOption;
export declare class RadioButtons implements Disposable {
    private readonly _id;
    private readonly _element;
    private readonly _options;
    private readonly _buttons;
    readonly onUpdate: Event<string>;
    constructor(element: HTMLElement, options: Option[], value?: string);
    dispose(): void;
    get value(): string;
    set value(value: string);
    private createButton;
}
export {};
