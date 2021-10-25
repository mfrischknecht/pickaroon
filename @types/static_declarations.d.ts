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
}
export interface LoadedData {
    messages: any[];
    additionalData: AdditionalData;
    libraries: Libraries;
}
export default function registerStaticDeclarations(declarations: TypescriptDeclarationRegistry): import("./disposable").default;
