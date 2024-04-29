export declare function validatePathOrUrl(pathOrUrl: string, options?: {
    requireFileExistence?: boolean;
    validFileExtensions?: string[];
    validHostnames?: string[];
}): URL | string;
