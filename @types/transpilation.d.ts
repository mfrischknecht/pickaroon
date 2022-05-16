import { TypescriptDeclarationRegistry } from "./typescript";
import { State } from "./state";
import Disposable from "./disposable";
export declare class Transpilation implements Disposable {
    private readonly _filename;
    private readonly _declarations;
    private readonly _typescript;
    private readonly _javascript;
    private readonly _firstTranspilation;
    private _currentTranspilation;
    private readonly _typescriptChanges;
    private readonly _declarationChanges;
    constructor(filename: string, declarations: TypescriptDeclarationRegistry, typescript: State<string>, javascript: State<string>);
    dispose(): void;
    waitUntilInitialized(): Promise<void>;
    waitForCurrentTranspilation(): Promise<void>;
    private transpile;
}
