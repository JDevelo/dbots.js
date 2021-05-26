export default class dbotsStats {
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
    async postStats(servercount?: string) {
        if(!this.key) throw new ReferenceError('You need to provide your api key.')
        if(!this.botid) throw new ReferenceError('You need to provide your bot id.')
        if(!servercount) throw new ReferenceError('You need to provide the server count.')
        this.fetch(`https://dbots.co/api/v1/bots/${this.botid}/stats`, {
            method: 'POST',
            headers: {
                "Authorization": `${this.key}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                guildCount: servercount
            })
        })
    }
    async getLog() {
        if(!this.key) throw new ReferenceError('You need to provide your api key.')
        if(!this.botid) throw new ReferenceError('You need to provide your bot id.')
        if(!this.botid) throw new ReferenceError('You need to provide the bot id.')
        this.fetch(`https://dbots.co/api/v1/bots/${this.botid}/log`, {
            method: 'POST',
            headers: {
                "Authorization": `${this.key}`,
                "Content-Type": "application/json"
            },
        })
    }
}