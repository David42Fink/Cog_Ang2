import {Flyer} from "./Flyer";

export class SuperMan extends Flyer
{
    fly(): string {
        return "super man flying";
    }

    takeOff(): string {
        return "super man taking off";
    }

    land(): string {
        return 'superman is: '+super.land();
    }
}