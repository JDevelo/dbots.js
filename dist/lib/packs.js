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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3BhY2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQWE1QixZQUFZLE1BQU07UUFDZCxHQUFHLEVBQUUsSUFBVztRQUNoQixLQUFLLEVBQUUsSUFBVztLQUNyQjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLE9BQU8sQ0FBQyxNQUFjOztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxNQUFNLEVBQUUsRUFBRTtnQkFDbEQsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNSLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzlCLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2FBQ0QsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0lBRUssV0FBVzs7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFO2dCQUN4QyxNQUFNLEVBQUUsS0FBSzthQUNoQixDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFDSyxRQUFRLENBQUMsTUFBYzs7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsTUFBTSxPQUFPLEVBQUU7Z0JBQ3ZELE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQzthQUNKLENBQUMsQ0FBQTtRQUNILENBQUM7S0FBQTtDQUVIO0FBdkRELDZCQXVEQyJ9