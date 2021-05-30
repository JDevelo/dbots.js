export default class dbotsStats {
    fetch: any;
    key: String;
    botid: String;
    constructor(ops?: {
        key: string;
        botid: string;
    });
    postStats(servercount?: String): Promise<void>;
    getLog(): Promise<void>;
}
