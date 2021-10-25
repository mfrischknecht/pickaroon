import Dialog from '../dialog';
export declare type SplashscreenTask = {
    description: string;
    promise: Promise<any> | null;
};
export default class SplashScreenDialog extends Dialog {
    constructor(tasks: SplashscreenTask[]);
}
