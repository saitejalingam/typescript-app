import {IAvenger} from '../models/avenger';

//still have to wrap my head around file naming conventions for interfaces
export interface IAvengersService {

    //functionName (arg list with type) : return type;
    getUsers ():Array<IAvenger>;
    getUser (id:number):IAvenger;
    addUser (user:IAvenger): void;
}