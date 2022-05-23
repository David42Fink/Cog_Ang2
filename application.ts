import {Flyer} from "./Flyer";
import {SuperMan} from "./SuperMan";
let flyer:Flyer;
flyer=new SuperMan();
console.log(`Showing Details of Super Man: ${flyer.takeOff()} ${flyer.fly()} ${flyer.land()}`)