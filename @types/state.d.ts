import { ReadOnlyEvent } from './event';
import Disposable from './disposable';
export interface StateUpdate<T> {
    oldValue?: T;
    newValue: T;
}
export declare class State<T> implements Disposable {
    private _value?;
    private _parsedValue?;
    private _rawValue?;
    private readonly _onUpdate;
    get onUpdate(): ReadOnlyEvent<StateUpdate<T>>;
    constructor();
    dispose(): void;
    get hasValue(): boolean;
    get hasRawValue(): boolean;
    get value(): T;
    set value(value: T);
    get rawValue(): T;
}
export interface ListStateLengthUpdate {
    newLength: number;
}
export interface ListStateUpdate<T> {
    index: number;
    oldValue?: T;
    newValue: T;
}
export declare class ListState<T> implements Disposable {
    private _length;
    private _values?;
    private _parsedValues?;
    private _rawValues?;
    private readonly _onLengthChanged;
    get onLengthChanged(): ReadOnlyEvent<ListStateLengthUpdate>;
    private readonly _onItemChanged;
    get onItemChanged(): ReadOnlyEvent<ListStateUpdate<T>>;
    constructor();
    dispose(): void;
    clear(): void;
    get length(): number;
    set length(length: number);
    hasValue(index: number): boolean;
    hasRawValue(index: number): boolean;
    getValue(index: number): T;
    setValue(index: number, value: T): void;
    getRawValue(index: number): T;
    get values(): T[];
    enumerate(): Generator<{
        index: number;
        value: T;
    }, void, unknown>;
    get rawValues(): T[];
    enumerateRawValues(): Generator<{
        index: number;
        value: T;
    }, void, unknown>;
}
export interface DictionaryStateUpdate<T> {
    key: string;
    oldValue?: T;
    newValue: T;
}
export declare class DictionaryState<T> implements Disposable {
    private _values?;
    private _parsedValues?;
    private _rawValues?;
    private readonly _onItemChanged;
    get onItemChanged(): ReadOnlyEvent<DictionaryStateUpdate<T>>;
    constructor();
    dispose(): void;
    get keys(): string[];
    hasValue(key: string): boolean;
    hasRawValue(key: string): boolean;
    getValue(key: string): T;
    setValue(key: string, value: T): void;
    deleteValue(key: string): void;
    clear(): void;
    getRawValue(index: number): T;
    values(): {
        [key: string]: T;
    };
    rawValues(): {
        [key: string]: T;
    };
}
