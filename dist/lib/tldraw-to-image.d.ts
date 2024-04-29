export type TldrawFormat = 'json' | 'png' | 'svg' | 'tldr';
export type TldrawToImageOptions = {
    dark?: boolean;
    format?: TldrawFormat;
    frames?: boolean | string[];
    name?: string;
    output?: string;
    padding?: number;
    pages?: boolean | number[] | string[];
    print?: boolean;
    scale?: number;
    stripStyle?: boolean;
    transparent?: boolean;
};
export declare function tldrawToImage(tldrPathOrUrl: string, options?: TldrawToImageOptions): Promise<string[]>;
