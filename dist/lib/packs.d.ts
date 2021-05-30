export default class dbotsPacks {
    fetch: any;
    key: string;
    botid: string;
    constructor(ops?: {
        key: string;
        botid: string;
    });
    getPack(packID: string): Promise<void>;
    getAllPacks(): Promise<void>;
    VotePack(packID: string): Promise<void>;
}
