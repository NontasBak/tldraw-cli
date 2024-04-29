import type { TldrawToImageOptions } from './tldraw-to-image';
export default class TldrawController {
    private readonly href;
    private page?;
    private isEmpty?;
    private browser?;
    constructor(href: string);
    private get isLocal();
    start(): Promise<void>;
    close(): Promise<void>;
    download(options: TldrawToImageOptions): Promise<string[]>;
    loadFile(filePath: string): Promise<void>;
    getShareUrl(): Promise<string>;
    private closeMenus;
    private clickButtonTitles;
    private validatePages;
    private validateFrames;
    private getDownloadPlans;
    private getSketchStructure;
    private getPages;
    private getPageFrames;
    private getCurrentPage;
    private setCurrentPage;
    private stripStyleElement;
    private stripUndefined;
}
