import Disposable from './disposable';
import { SourceMapConsumer } from 'source-map';
import { States } from './app_states';
import { ReadOnlyEvent } from './event';
export interface StackTraceEntry {
    formatted: string;
    function: string;
    source: string;
    line: number;
    column: number;
}
export declare type SourceMaps = {
    [id: string]: SourceMapConsumer;
};
export declare let waitUntilMonacoIsInitialized: () => Promise<unknown>;
export declare function transpileTypescriptToJavascript(fileName: string, declarations: TypescriptDeclarationRegistry | null, typescript: string): Promise<import("./typescript/types").TranspilationResult>;
export declare let waitUntilTypescriptIsInitialized: () => Promise<void>;
export declare function defaultGlobalOverrides(): any;
export declare function createGlobals(...globals: any[]): any;
export declare type GlobalOverrides = {
    [key: string]: any;
};
export declare type Imports = {
    [key: string]: any;
};
export declare function compileJavascriptModule(name: string, javascript: string, require: (name: string) => any, globalOverrides: GlobalOverrides): Promise<() => TypescriptModule>;
export declare type StackTraceTranslation = (stackTrace: string) => string | StackTraceEntry[];
export interface TypescriptModule {
    id: string;
    module: any;
    sourceMap: SourceMapConsumer | null;
}
export declare type TypescriptModules = {
    [key: string]: TypescriptModule;
};
export interface TypescriptModulesFactory {
    id: string;
    createModules(globals: any): Promise<TypescriptModules>;
}
export interface TypescriptDeclarations {
    importName?: string;
    filePath?: string;
    declarations: string;
}
export declare type TypescriptDeclarationSet = {
    [key: string]: TypescriptDeclarations;
};
export interface TypescriptLibrary {
    importName: string;
    code: string;
}
export declare type DeclarationsChangedCallback = (key: string, declarations?: TypescriptDeclarations) => void;
export declare class TypescriptSourceMapsRegistry {
    private readonly _sourceMaps;
    constructor();
    register(sourcemaps: SourceMaps): Disposable;
    translateStackTrace(stack: string): StackTraceEntry[];
    private parseStackTraceEntry;
    formatStackString(stack: string): string;
    formatStackTrace(stack: StackTraceEntry[]): string;
    formatError(error: Error): string;
    getStackTrace(): StackTraceEntry[];
}
export declare class TypescriptDeclarationRegistry implements Disposable {
    private readonly _declarations;
    private readonly _onUpdate;
    constructor();
    dispose(): void;
    get declarations(): {
        [id: string]: TypescriptDeclarationSet;
    };
    get onUpdate(): ReadOnlyEvent<TypescriptDeclarationSet>;
    declare(declarations: TypescriptDeclarationSet): Disposable;
    private undeclare;
    private processUpdate;
    private condenseDeclarations;
    loadTypescriptLibraries(): Promise<Disposable>;
}
export declare class CompileLibraries implements Disposable {
    private readonly builtInModules;
    private readonly _libraries;
    private readonly _libraryCodeTs;
    private readonly _libraryCodeJs;
    private readonly _libraryDeclarations;
    private readonly _libraryModules;
    private readonly _declarationRegistry;
    private readonly _librariesListener;
    constructor(states: States, declarationRegistry: TypescriptDeclarationRegistry, builtInModules: TypescriptModules);
    dispose(): void;
    private _compilationTrigger;
    private _compilationAttempt;
    private compileLibraries;
    private createModulesFactory;
}
