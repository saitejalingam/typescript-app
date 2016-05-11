import {IAvenger} from './../models/avenger';
import {AVENGERS_DATA} from './../data/avengers-data';
import {IAvengersService} from './iavengers.service.ts';


export class AvengersService implements IAvengersService {

    private avengers:Array<IAvenger>;
    constructor() {
        //init with some avengers
        this.avengers = AVENGERS_DATA;
    }
    getUsers ():Array<IAvenger> {
        return this.avengers;
    }
    getUser (id:number):IAvenger {
        return this.avengers.find((av:IAvenger) => av.id === id);
    }
    addUser (user:IAvenger): void {
        this.avengers.push(user);
    }
}

