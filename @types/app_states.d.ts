import { LogEntry } from "./log";
import { TransformedMessage } from "./message_transformation";
import { EditorBindings } from "./monaco";
import { ListState, State } from "./state";
import { Scheme, Theme } from "./theme";
import { DroppedFiles } from "./message_fetching";
import { TypescriptDeclarations, TypescriptLibrary, TypescriptModuleFactory } from "./typescript";
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
    droppedFiles: State<DroppedFiles>;
    fetchingCodeTs: State<string>;
    fetchingCodeJs: State<string>;
    transformationCodeTs: State<string>;
    transformationCodeJs: State<string>;
    libraries: State<{
        [key: string]: TypescriptLibrary;
    }>;
    libraryDeclarations: State<{
        [key: string]: TypescriptDeclarations;
    }>;
    libraryCodeTs: State<{
        [key: string]: string;
    }>;
    libraryCodeJs: State<{
        [key: string]: string;
    }>;
    libraryModules: State<TypescriptModuleFactory>;
}
export default function init(): States;
