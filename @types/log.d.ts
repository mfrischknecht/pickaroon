import { StackTraceEntry, TypescriptSourceMapsRegistry } from "./typescript";
export declare type LogEntryType = 'trace' | 'debug' | 'info' | 'warning' | 'error';
export interface LogEntry {
    type: LogEntryType;
    values: LogEntryValue[];
    stackTrace: StackTraceEntry[];
}
export declare type LogEntryValueType = 'string' | 'json' | 'Error' | 'StackTrace' | 'undefined';
export interface LogEntryValue {
    type: LogEntryValueType;
    value: any;
    displayString: string;
    stack?: StackTraceEntry[];
}
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
    private readonly _sourceMaps;
    constructor(sourceMaps: TypescriptSourceMapsRegistry);
    writeToBrowserConsole(entry: LogEntry): void;
    appendOnly(): AppendOnlyMockConsole;
    clear(): void;
    get entries(): LogEntry[];
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    storeEntry(type: LogEntryType, values: any[]): void;
    toLogEntryValue(value: any): LogEntryValue;
    getStackTrace(): StackTraceEntry[];
}
export {};
