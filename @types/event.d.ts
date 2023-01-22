import Disposable from './disposable';
export type Callback<T> = (arg: T) => void;
export interface ReadOnlyEvent<T> {
    registerListener(callback: Callback<T>): Disposable;
}
export interface InvokableEvent<T> extends ReadOnlyEvent<T>, Disposable {
    invoke(arg: T): void;
}
export default class Event<T> implements InvokableEvent<T> {
    private readonly _listeners;
    constructor();
    dispose(): void;
    invoke(arg: T): void;
    registerListener(callback: Callback<T>): Disposable;
    private unregisterListener;
}
