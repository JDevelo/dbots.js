export default class dbotsStats {
    fetch: any;
    key: null;
    botid: null;
    constructor(ops?: {
        key: any;
        botid: any;
    });
    postStats(servercount?: string): Promise<void>;
    getLog(botid?: string): Promise<void>;
}
