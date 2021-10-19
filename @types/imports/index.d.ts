import Disposable from '../disposable';
import { States } from '../app_states';
import { TypescriptDeclarationRegistry } from '../typescript';
export declare const importObject: {
    [key: string]: any;
};
export declare class MaintainLibraryDeclarations implements Disposable {
    private readonly _states;
    private readonly _declarationsChanged;
    private readonly _registry;
    private readonly _staticImportDeclarations;
    private _currentLibraryDeclarations;
    constructor(states: States, registry: TypescriptDeclarationRegistry);
    dispose(): void;
    private newDeclarations;
}
