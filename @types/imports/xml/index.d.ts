export default class Xml {
    readonly source: string;
    readonly document: Document;
    private constructor();
    xpath(path: string): Node[];
    toString(): string;
    static parse(source: string): Xml;
}
export declare let typescriptDeclarations: string;
