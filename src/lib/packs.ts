export default class dbotsPacks {
    /**
     * fetch
     */
    public fetch;
    /**
     * Key
     */
    public key: null;
    /**
     * botid
    */
    public botid: null;
    constructor(ops = {
        key: null as any,
        botid: null as any
    }) {
        /**
         * Auth key
         */
        this.key = ops.key
        /**
         * Bot ID
         */
        this.botid = ops.botid
        /**
         * node fetch
         */
        this.fetch = require('node-fetch')
    }
    async getPack(packID: string) {
        this.fetch(`https://dbots.co/api/v1/packs/${packID}`, {
            method: 'GET',
            headers: {
                "Authorization": `${this.key}`,
                "Content-Type": "application/json"
            },
        })
    }

    async getAllPacks() {
        this.fetch(`https://dbots.co/api/v1/packs`, {
            method: "GET"
        })
    }
    async VotePack(packID: string) {
        this.fetch(`https://dbots.co/api/v1/packs/${packID}/vote`, {
            method: 'GET',
            headers: {
                "Authorization": `${this.key}`,
                "Content-Type": "application/json"
            }
        })
    }

}