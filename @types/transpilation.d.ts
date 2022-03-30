import { State } from "./state";
import Disposable from "./disposable";
export declare class Transpilation implements Disposable {
    private readonly _filename;
    private readonly _typescript;
    private readonly _javascript;
    private readonly _typescriptChanges;
    private readonly _firstTranspilation;
    private _currentTranspilation;
    constructor(filename: string, typescript: State<string>, javascript: State<string>);
    dispose(): void;
    waitUntilInitialized(): Promise<void>;
    waitForCurrentTranspilation(): Promise<void>;
    private transpile;
}
