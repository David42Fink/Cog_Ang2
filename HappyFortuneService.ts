import {FortuneService} from "./FortuneService";

export class HappyFortuneService implements FortuneService
{
    getFortune(): string {
        return "today is your lucky day";
    }

}