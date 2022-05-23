export abstract class Flyer
{
    abstract fly():string;

    land():string
    {
        return 'landing';
    }

    abstract takeOff():string;

}