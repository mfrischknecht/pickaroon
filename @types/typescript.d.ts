import Disposable from './disposable';
export interface StackTraceEntry {
    formatted: string;
    function: string;
    source: string;
    line: number;
    column: number;
}
export declare let waitUntilMonacoIsInitialized: () => Promise<unknown>;
export declare function transpileTypescriptToJavascript(fileName: string, typescript: string): Promise<any>;
export declare let waitUntilTypescriptIsInitialized: () => Promise<void>;
export declare function defaultGlobalOverrides(): any;
declare type GlobalOverrides = {
    [key: string]: any;
};
declare type Imports = {
    [key: string]: any;
};
export declare function compileJavascriptModule(javascript: string, imports: Imports, globalOverrides: GlobalOverrides): Promise<{
    module: any;
    translateStackTrace: (stackTrace: string) => string | StackTraceEntry[];
}>;
export interface TypescriptDeclarations {
    importName?: string;
    filePath?: string;
    declarations: string;
}
export declare type DeclarationsChangedCallback = (key: string, declarations?: TypescriptDeclarations) => void;
export declare class TypescriptDeclarationRegistry implements Disposable {
    private readonly _declarations;
    private readonly _listeners;
    constructor();
    dispose(): void;
    declare(key: string, declarations: TypescriptDeclarations): void;
    undeclare(key: string): void;
    private notifyListeners;
    onUpdate(callback: DeclarationsChangedCallback): Disposable;
    loadTypescriptLibraries(): Promise<void>;
}
export {};
