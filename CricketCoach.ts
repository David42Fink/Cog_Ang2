import {Coach} from "./Coach";
import {FortuneService} from "./FortuneService";
import {SadFortuneService} from "./SadFortuneService";
import {CoachType} from "./CoachType";


class CricketCoach implements Coach
{
    coachType:CoachType;
    fortuneService:FortuneService


    constructor(coachType:CoachType) {
        this.coachType=coachType;
        this.fortuneService=new SadFortuneService();
    }

    getDailyFortune(): string {
        return this.fortuneService.getFortune();
    }

    getDailyWorkOut(): string {
        return "Practice Spin Bowling Today";
    }
getCoachType()
{
    console.log('Coach type is: '+this.coachType.toString());
}

}

let coach=new CricketCoach(CoachType.freelance);
console.log(coach.getDailyWorkOut());
console.log(coach.getDailyFortune());
console.log(coach.coachType);