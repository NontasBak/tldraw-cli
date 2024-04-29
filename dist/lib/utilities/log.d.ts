declare const log: {
    verbose: boolean;
    log(...data: unknown[]): void;
    logPrefixed(prefix: string, ...data: unknown[]): void;
    info(...data: unknown[]): void;
    infoPrefixed(prefix: string, ...data: unknown[]): void;
    warn(...data: unknown[]): void;
    warnPrefixed(prefix: string, ...data: unknown[]): void;
    error(...data: unknown[]): void;
    errorPrefixed(prefix: string, ...data: unknown[]): void;
};
export default log;
