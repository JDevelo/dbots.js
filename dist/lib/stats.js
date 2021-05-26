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
}
exports.default = dbotsStats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQWEzQixZQUFZLE1BQU07UUFDZCxHQUFHLEVBQUUsSUFBVztRQUNoQixLQUFLLEVBQUUsSUFBVztLQUNyQjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLFNBQVMsQ0FBQyxXQUFvQjs7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMzRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDOUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckM7Z0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pCLFVBQVUsRUFBRSxXQUFXO2lCQUMxQixDQUFDO2FBQ0wsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUExQ0QsNkJBMENDIn0=