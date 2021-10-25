export interface XPathResult {
    [index: number]: Node;
    nodes: Node[];
    transposed: XPathResult[];
    length: number;
    xpath(xpath: string, namespaceResolver?: XPathNSResolver): XPathResult;
}
export default class Xml {
    readonly source: string;
    readonly document: Document;
    private constructor();
    xpath(xpath: string, namespaceResolver?: XPathNSResolver): XPathResult;
    toString(): string;
    static parse(source: string): Xml;
}
export declare let typescriptDeclarations: string;
