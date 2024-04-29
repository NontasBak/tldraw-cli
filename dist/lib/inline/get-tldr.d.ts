import { type Editor } from 'tldraw';
declare global {
    interface Window {
        editor: Editor;
        getTldr: () => Promise<string>;
    }
}
