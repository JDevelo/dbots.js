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
class dbotsPacks {
    constructor(ops = {
        key: "",
        botid: ""
    }) {
        this.key = ops.key;
        this.botid = ops.botid;
        this.fetch = require('node-fetch');
    }
    getPack(packID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (!this.botid)
                throw new ReferenceError('You need to provide your bot id.');
            this.fetch(`https://dbots.co/api/v1/packs/${packID}`, {
                method: 'GET',
                headers: {
                    "Authorization": `${this.key}`,
                    "Content-Type": "application/json"
                },
            });
        });
    }
    getAllPacks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fetch(`https://dbots.co/api/v1/packs`, {
                method: "GET"
            });
        });
    }
    VotePack(packID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (!this.botid)
                throw new ReferenceError('You need to provide your bot id.');
            if (!packID)
                throw new ReferenceError('You need to provide a pack id.');
            this.fetch(`https://dbots.co/api/v1/packs/${packID}/vote`, {
                method: 'GET',
                headers: {
                    "Authorization": `${this.key}`,
                    "Content-Type": "application/json"
                }
            });
        });
    }
}
exports.default = dbotsPacks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3BhY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQU8zQixZQUFZLEdBQUcsR0FBRztRQUNkLEdBQUcsRUFBRSxFQUFFO1FBQ1AsS0FBSyxFQUFFLEVBQUU7S0FDWjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLE9BQU8sQ0FBQyxNQUFjOztZQUN4QixJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1lBQzNFLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7WUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xELE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRTtnQkFDeEMsTUFBTSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0lBQ0ssUUFBUSxDQUFDLE1BQWM7O1lBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7WUFDM0UsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtZQUM1RSxJQUFHLENBQUMsTUFBTTtnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7WUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsTUFBTSxPQUFPLEVBQUU7Z0JBQ3ZELE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUVKO0FBdERELDZCQXNEQyJ9
