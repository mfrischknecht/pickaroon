import { TypescriptDeclarations, TypescriptModulesFactory } from "./typescript";
import { Libraries, LocalFiles } from "./static_declarations";
import { ListState, State } from "./state";
import { Scheme, Theme } from "./theme";
import { TransformedMessage } from "./message_transformation";
import { EditorBindings } from "./monaco";
import { LogEntry } from "./log";
export interface States {
    preferredColorScheme: State<Scheme>;
    activeTheme: State<Theme>;
    editorBindings: State<EditorBindings>;
    vimBindings: State<boolean>;
    messages: ListState<any>;
    transformedMessages: ListState<TransformedMessage>;
    rawLogs: ListState<LogEntry[]>;
    additionalData: State<any>;
    selectedMessageIndex: State<number>;
    selectedSourceMessage: State<any>;
    selectedTransformedMessage: State<any>;
    selectedLog: State<LogEntry[]>;
    scratchpadTexts: State<{
        [key: string]: string;
    }>;
    displayedScratchpadTexts: State<{
        [key: string]: number;
    }>;
    droppedFiles: State<LocalFiles>;
    libraryFetchingCodeTs: State<string>;
    libraryFetchingCodeJs: State<string>;
    dataFetchingCodeTs: State<string>;
    dataFetchingCodeJs: State<string>;
    transformationCodeTs: State<string>;
    transformationCodeJs: State<string>;
    libraries: State<Libraries>;
    libraryDeclarations: State<{
        [key: string]: TypescriptDeclarations;
    }>;
    libraryCodeTs: State<{
        [key: string]: string;
    }>;
    libraryCodeJs: State<{
        [key: string]: string;
    }>;
    libraryModules: State<TypescriptModulesFactory>;
}
export default function init(): States;
