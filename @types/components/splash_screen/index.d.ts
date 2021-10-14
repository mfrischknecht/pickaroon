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
export declare type SplashscreenTask = {
    description: string;
    promise: Promise<any> | null;
};
export default class SplashScreenDialog extends Dialog {
    constructor(tasks: SplashscreenTask[]);
}
