import Disposable from "../../disposable";
import Event from '../../event';
export declare class DropTargetIndicator implements Disposable {
    private readonly _root;
    private readonly _inner;
    private readonly _text;
    private readonly _onDragStart;
    private readonly _onDragEnd;
    readonly onDrop: Event<DragEvent>;
    constructor(parent: HTMLElement, hintText: string, predicate: (event: DragEvent) => boolean, onDrop?: (event: DragEvent) => void);
    dispose(): void;
}
