import { TypescriptDeclarationRegistry, TypescriptModules } from '../typescript';
import { States } from '../app_states';
import Disposable from '../disposable';
export declare const modules: TypescriptModules;
export declare class MaintainLibraryDeclarations implements Disposable {
    private readonly _declarationsChanged;
    private readonly _registry;
    private readonly _staticImportDeclarations;
    private _currentLibraryDeclarations;
    constructor(states: States, registry: TypescriptDeclarationRegistry);
    dispose(): void;
    private newDeclarations;
}
