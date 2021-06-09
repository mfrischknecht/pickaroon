import { JsonValue } from "golden-layout";
import { States } from "./app_states";
import Disposable from "./disposable";
import { TypescriptDeclarationRegistry } from "./typescript";
export declare function generateInterfaces(rootName: string, objects: JsonValue[]): string;
export default class DeclareMessageTypes implements Disposable {
    private readonly _key;
    private readonly _messages;
    private readonly _declarations;
    private readonly _messagesLengthListener;
    private readonly _messagesListener;
    constructor(states: States, declarationKey: string, declarations: TypescriptDeclarationRegistry);
    dispose(): void;
    private _timeout;
    private handleMessagesChange;
}
