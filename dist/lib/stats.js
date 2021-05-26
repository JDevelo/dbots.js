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
        key: "",
        botid: ""
    }) {
        this.key = ops.key;
        this.botid = ops.botid;
        this.fetch = require('node-fetch');
    }
    postStats(servercount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.botid);
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (!this.botid)
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
    getLog() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.key)
                throw new ReferenceError('You need to provide your api key.');
            if (!this.botid)
                throw new ReferenceError('You need to provide your bot id.');
            this.fetch(`https://dbots.co/api/v1/bots/${this.botid}/log`, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBcUIsVUFBVTtJQWEzQixZQUFZLEdBQUcsR0FBRztRQUNkLEdBQUcsRUFBRSxFQUFFO1FBQ1AsS0FBSyxFQUFFLEVBQUU7S0FDWjtRQUlHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtRQUlsQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFJdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNLLFNBQVMsQ0FBQyxXQUFvQjs7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDdkIsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtZQUMzRSxJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1lBQzVFLElBQUcsQ0FBQyxXQUFXO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtZQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQzNELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakIsVUFBVSxFQUFFLFdBQVc7aUJBQzFCLENBQUM7YUFDTCxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFDSyxNQUFNOztZQUNSLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7WUFDM0UsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtZQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQUU7Z0JBQ3pELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixjQUFjLEVBQUUsa0JBQWtCO2lCQUNyQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBekRELDZCQXlEQyJ9
