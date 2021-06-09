import Disposable from "./disposable";
import { State } from "./state";
export declare class Transpilation implements Disposable {
    private readonly _filename;
    private readonly _typescript;
    private readonly _javascript;
    private readonly _typescriptChanges;
    constructor(filename: string, typescript: State<string>, javascript: State<string>);
    dispose(): void;
    private transpile;
}
