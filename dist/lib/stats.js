"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class dbotsStats {
    constructor(ops = {
        key: null,
        botid: null
    }) {
        this.key = ops.key;
        this.botid = ops.botid;
        this.fetch = require('node-fetch');
    }
    postStats(servercount) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (this.botid)
                throw new ReferenceError('You need to provide your bot id.');
            if (!servercount)
                throw new ReferenceError('You need to provide the server count.');
            this.fetch(`https://dbots.co/api/v1/bots/${this.botid}/stats`, {
                method: 'POST',
                headers: {
                    "Authorization": `${this.key}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    guildCount: servercount
                })
            });
        });
    }
    getLog(botid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (this.botid)
                throw new ReferenceError('You need to provide your bot id.');
            if (!botid)
                throw new ReferenceError('You need to provide the bot id.');
            this.fetch(`https://dbots.co/api/v1/bots/${botid}/log`, {
                method: 'POST',
                headers: {
                    "Authorization": `${this.key}`,
                    "Content-Type": "application/json"
                },
            });
        });
    }
}
exports.default = dbotsStats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQWEzQixZQUFZLE1BQU07UUFDZCxHQUFHLEVBQUUsSUFBVztRQUNoQixLQUFLLEVBQUUsSUFBVztLQUNyQjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLFNBQVMsQ0FBQyxXQUFvQjs7WUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtZQUMzRSxJQUFHLElBQUksQ0FBQyxLQUFLO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtZQUMzRSxJQUFHLENBQUMsV0FBVztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7WUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMzRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDOUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pCLFVBQVUsRUFBRSxXQUFXO2lCQUMxQixDQUFDO2FBQ0wsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0lBQ0ssTUFBTSxDQUFDLEtBQWM7O1lBQ3ZCLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7WUFDM0UsSUFBRyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7WUFDM0UsSUFBRyxDQUFDLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1lBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEtBQUssTUFBTSxFQUFFO2dCQUNwRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDOUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQXpERCw2QkF5REMifQ==