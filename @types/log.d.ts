import { StackTraceEntry } from "./typescript";
export interface LogEntry {
    type: 'trace' | 'debug' | 'info' | 'warning' | 'error';
    values: any[];
    stackTrace: StackTraceEntry[];
}
export declare function makeEntrySerializable(entry: LogEntry): LogEntry;
export declare function makeEntriesSerializable(entries: LogEntry[]): LogEntry[];
declare class AppendOnlyMockConsole {
    private readonly _console;
    constructor(console: MockConsole);
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export declare class MockConsole {
    private _entries;
    private readonly _stackTrace;
    constructor(stackTrace?: () => StackTraceEntry[]);
    appendOnly(): AppendOnlyMockConsole;
    clear(): void;
    get entries(): LogEntry[];
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export {};
