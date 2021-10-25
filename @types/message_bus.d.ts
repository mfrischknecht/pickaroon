import { EventHub } from 'golden-layout';
import Disposable from './disposable';
export declare type SubscriptionCallback = (...args: any[]) => void;
export interface MessageBus {
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
}
export declare class MessageBusProxy implements MessageBus, Disposable {
    private readonly _upstreamSubscriptions;
    private readonly _downstreamSubscriptions;
    private _messageBus;
    constructor(messageBus?: MessageBus);
    dispose(): void;
    setUpstream(messageBus: MessageBus): void;
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
}
export declare class ScopedMessageBus implements MessageBus, Disposable {
    readonly scope: string;
    private readonly _messageBus;
    private readonly _subscriptions;
    private readonly _onMessageListener;
    constructor(scope: string, messageBus: MessageBus);
    dispose(): void;
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
    private onMessage;
}
export default class GoldenLayoutMessageBus implements MessageBus, Disposable {
    private _eventHub;
    private readonly _subscriptions;
    private readonly _onMessageListener;
    constructor(eventHub: EventHub);
    dispose(): void;
    subscribe(messageType: string, callback: SubscriptionCallback): Disposable;
    broadcast(messageType: string, ...args: any[]): void;
    switchEventHub(newEventHub: EventHub): void;
    private onMessage;
}
