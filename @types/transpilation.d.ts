import { TypescriptDeclarationRegistry } from "./typescript";
import { DictionaryState, State } from "./state";
import Disposable from "./disposable";
import { Diagnostic } from "./typescript/types";
export declare class Transpilation implements Disposable {
    private readonly _filename;
    private readonly _declarations;
    private readonly _typescript;
    private readonly _javascript;
    private readonly _diagnostics;
    private readonly _firstTranspilation;
    private _currentTranspilation;
    private readonly _typescriptChanges;
    private readonly _declarationChanges;
    constructor(filename: string, declarations: TypescriptDeclarationRegistry, typescript: State<string>, javascript: State<string>, diagnostics: DictionaryState<Diagnostic[]>);
    dispose(): void;
    waitUntilInitialized(): Promise<void>;
    waitForCurrentTranspilation(): Promise<void>;
    private transpile;
}
