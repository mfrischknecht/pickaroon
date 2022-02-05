import { TypescriptDeclarationRegistry } from "./typescript";
export interface LocalFile {
    name: string;
    type: string;
    size: number;
    sizeText: string;
    text: () => Promise<string>;
    stream: () => ReadableStream<any>;
}
export declare type LocalFiles = {
    [name: string]: LocalFile;
};
export declare type AdditionalData = {
    [key: string]: any;
};
export declare type Libraries = {
    [name: string]: string;
};
export interface LoadingArguments {
    localFiles: LocalFiles;
    query: any;
}
export interface LoadedData {
    messages: any[];
    additionalData: AdditionalData;
}
export interface MessageTransformationResult {
    log: LogText;
    details?: {
        [name: string]: MessageDetail;
    };
}
export declare type LogText = LogText[] | FormattedText | string;
export interface FormattedText {
    content: LogText;
    href?: string;
    color?: string;
    backgroundColor?: string;
    fontWeight?: string;
    fontStyle?: string;
    textDecoration?: string;
}
export interface MessageDetail {
    language: string;
    content: string;
}
export default function registerStaticDeclarations(declarations: TypescriptDeclarationRegistry): import("./disposable").default;
