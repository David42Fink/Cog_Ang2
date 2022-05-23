import {Coach} from "./Coach";
import {FortuneService} from "./FortuneService";
import {HappyFortuneService} from "./HappyFortuneService";
import {SadFortuneService} from "./SadFortuneService";


class CricketCoach implements Coach
{
    fortuneService:FortuneService


    constructor() {
        this.fortuneService=new SadFortuneService();
    }

    getDailyFortune(): string {
        return this.fortuneService.getFortune();
    }

    getDailyWorkOut(): string {
        return "Practice Spin Bowling Today";
    }

}

let coach=new CricketCoach();
console.log(coach.getDailyWorkOut());
console.log(coach.getDailyFortune());