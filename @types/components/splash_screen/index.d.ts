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
export default class SplashScreenDialog extends Dialog {
    constructor(tasks: [string, Promise<any>][]);
}
