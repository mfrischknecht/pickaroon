import { LayoutConfig } from 'golden-layout';
import Dialog from '../dialog';
export interface Config {
    layout: LayoutConfig;
    code: {
        transformation: string;
        fetching: string;
        scratchpad: {
            [key: string]: string;
        };
    };
}
export default class SharingDialog extends Dialog {
    constructor(config: Config);
}
