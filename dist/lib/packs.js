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
        key: null,
        botid: null
    }) {
        this.key = ops.key;
        this.botid = ops.botid;
        this.fetch = require('node-fetch');
    }
    getPack(packID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (this.botid)
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
            if (this.botid)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3BhY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQWEzQixZQUFZLE1BQU07UUFDZCxHQUFHLEVBQUUsSUFBVztRQUNoQixLQUFLLEVBQUUsSUFBVztLQUNyQjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLE9BQU8sQ0FBQyxNQUFjOztZQUN4QixJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1lBQzNFLElBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1lBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLE1BQU0sRUFBRSxFQUFFO2dCQUNsRCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDOUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUU7Z0JBQ3hDLE1BQU0sRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtJQUNLLFFBQVEsQ0FBQyxNQUFjOztZQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1lBQzNFLElBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1lBQzNFLElBQUcsQ0FBQyxNQUFNO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtZQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxNQUFNLE9BQU8sRUFBRTtnQkFDdkQsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNMLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzlCLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBRUo7QUE1REQsNkJBNERDIn0=