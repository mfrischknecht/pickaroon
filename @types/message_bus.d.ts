import { LayoutManager } from 'golden-layout';
import Disposable from './disposable';
export declare type SubscriptionCallback = (...args: any[]) => void;
export interface MessageBus {
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
}
export declare class ScopedMessageBus implements MessageBus, Disposable {
    readonly scope: string;
    private readonly _messageBus;
    private readonly _subscriptions;
    constructor(scope: string, messageBus: MessageBus);
    dispose(): void;
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
}
export default class GoldenLayoutMessageBus implements MessageBus, Disposable {
    private readonly _eventHub;
    private readonly _subscriptions;
    constructor(layout: LayoutManager);
    dispose(): void;
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
}
