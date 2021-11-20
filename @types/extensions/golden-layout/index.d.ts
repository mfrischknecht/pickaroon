declare module 'golden-layout' {
    interface ComponentContainer {
        awaitEvent<K extends keyof EventEmitter.EventParamsMap>(event: K): Promise<EventEmitter.EventParamsMap[K]>;
    }
}
export {};
