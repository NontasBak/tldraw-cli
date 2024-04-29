import { type Editor } from 'tldraw';
declare global {
    interface Window {
        editor: Editor;
        getImage: (options: {
            background?: boolean;
            darkMode?: boolean;
            format: 'json' | 'png' | 'svg';
            padding?: number;
            scale?: number;
        }) => Promise<string>;
    }
}
