"use strict";
exports.__esModule = true;
var SadFortuneService_1 = require("./SadFortuneService");
var CoachType_1 = require("./CoachType");
var CricketCoach = /** @class */ (function () {
    function CricketCoach(coachType) {
        this.coachType = coachType;
        this.fortuneService = new SadFortuneService_1.SadFortuneService();
    }
    CricketCoach.prototype.getDailyFortune = function () {
        return this.fortuneService.getFortune();
    };
    CricketCoach.prototype.getDailyWorkOut = function () {
        return "Practice Spin Bowling Today";
    };
    CricketCoach.prototype.getCoachType = function () {
        console.log('Coach type is: ' + this.coachType.toString());
    };
    return CricketCoach;
}());
var coach = new CricketCoach(CoachType_1.CoachType.freelance);
console.log(coach.getDailyWorkOut());
console.log(coach.getDailyFortune());
console.log(coach.coachType);
