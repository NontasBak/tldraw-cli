export default class LocalTldrawServer {
    private readonly tldrData?;
    private server?;
    constructor(tldrData?: string | undefined);
    close(): void;
    start(): Promise<void>;
    get href(): string;
}
