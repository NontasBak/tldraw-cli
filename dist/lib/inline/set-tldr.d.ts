import { type Editor } from 'tldraw';
declare global {
    interface Window {
        editor: Editor;
        setTldr: (tldrData: string) => void;
    }
}
