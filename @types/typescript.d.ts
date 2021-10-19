import Disposable from './disposable';
import { States } from './app_states';
import { ReadOnlyEvent } from './event';
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
export declare function compileJavascriptModule(javascript: string, imports: Imports, globalOverrides: GlobalOverrides): TypescriptModule;
export declare type StackTraceTranslation = (stackTrace: string) => string | StackTraceEntry[];
export interface TypescriptModule {
    module: any;
    createStackTraceTranslation: () => Promise<StackTraceTranslation>;
}
export declare type TypescriptModules = {
    [key: string]: TypescriptModule;
};
export declare type TypescriptModuleFactory = (globals: any) => TypescriptModule;
export declare type TypescriptModuleFactories = {
    [key: string]: TypescriptModuleFactory;
};
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
export declare class TypescriptDeclarationRegistry implements Disposable {
    private readonly _declarations;
    private readonly _onUpdate;
    constructor();
    dispose(): void;
    get onUpdate(): ReadOnlyEvent<TypescriptDeclarationSet>;
    declare(declarations: TypescriptDeclarationSet): Disposable;
    private undeclare;
    private processUpdate;
    private condenseDeclarations;
    loadTypescriptLibraries(): Promise<Disposable>;
}
export declare class CompileLibraries implements Disposable {
    private readonly _builtinImports;
    private readonly _libraries;
    private readonly _libraryCodeTs;
    private readonly _libraryCodeJs;
    private readonly _libraryDeclarations;
    private readonly _libraryModules;
    private readonly _librariesListener;
    constructor(states: States, builtinInports: Imports);
    dispose(): void;
    private _compilationTrigger;
    private _compilationAttempt;
    private onLibraryChange;
}
export {};
