import { TypescriptDeclarationSet, TranspilationResult } from './types';
export declare function transpileTypescript(fileName: string, declarations: TypescriptDeclarationSet[], typescript: string): Promise<TranspilationResult>;
