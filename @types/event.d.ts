import Disposable from './disposable';
export declare type Callback<T> = (arg: T) => void;
interface Listener<T> extends Disposable {
    callback: Callback<T>;
}
export interface ReadOnlyEvent<T> {
    registerListener(callback: Callback<T>): Listener<T>;
}
export interface InvokableEvent<T> extends ReadOnlyEvent<T>, Disposable {
    invoke(arg: T): void;
}
export default class Event<T> implements InvokableEvent<T> {
    private readonly _listeners;
    constructor();
    dispose(): void;
    invoke(arg: T): void;
    registerListener(callback: Callback<T>): Listener<T>;
    private unregisterListener;
}
export {};
