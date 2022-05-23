"use strict";
exports.__esModule = true;
var SadFortuneService_1 = require("./SadFortuneService");
var CricketCoach = /** @class */ (function () {
    function CricketCoach() {
        this.fortuneService = new SadFortuneService_1.SadFortuneService();
    }
    CricketCoach.prototype.getDailyFortune = function () {
        return this.fortuneService.getFortune();
    };
    CricketCoach.prototype.getDailyWorkOut = function () {
        return "Practice Spin Bowling Today";
    };
    return CricketCoach;
}());
var coach = new CricketCoach();
console.log(coach.getDailyWorkOut());
console.log(coach.getDailyFortune());
