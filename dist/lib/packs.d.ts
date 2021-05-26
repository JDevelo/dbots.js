export default class dbotsPacks {
    fetch: any;
    key: null;
    botid: null;
    constructor(ops?: {
        key: any;
        botid: any;
    });
    getPack(packID: string): Promise<void>;
    getAllPacks(): Promise<void>;
    VotePack(packID: string): Promise<void>;
}
