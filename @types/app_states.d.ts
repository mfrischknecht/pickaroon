import { LogEntry } from "./log";
import { TransformedMessage } from "./message_transformation";
import { EditorBindings } from "./monaco";
import { ListState, State } from "./state";
import { Scheme, Theme } from "./theme";
import { DroppedFiles } from "./message_fetching";
export interface States {
    preferredColorScheme: State<Scheme>;
    activeTheme: State<Theme>;
    editorBindings: State<EditorBindings>;
    vimBindings: State<boolean>;
    messages: ListState<any>;
    transformedMessages: ListState<TransformedMessage>;
    rawLogs: ListState<LogEntry[]>;
    selectedMessageIndex: State<number>;
    selectedSourceMessage: State<any>;
    selectedTransformedMessage: State<any>;
    selectedLog: State<LogEntry[]>;
    transformationCodeTs: State<string>;
    transformationCodeJs: State<string>;
    fetchingCodeTs: State<string>;
    fetchingCodeJs: State<string>;
    scratchpadTexts: State<{
        [key: string]: string;
    }>;
    displayedScratchpadTexts: State<{
        [key: string]: number;
    }>;
    droppedFiles: State<DroppedFiles>;
}
export default function init(): States;
