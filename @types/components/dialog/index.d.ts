import Disposable from '../../disposable';
export default class Dialog implements Disposable {
    private readonly _backdrop;
    private readonly _dialog;
    private readonly _title;
    private readonly _content;
    constructor(title: string, callback: (element: HTMLElement) => void);
    dispose(): void;
}
