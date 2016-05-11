import {AvengersService} from './services/avengers.service';
import {IAvenger} from "./models/avenger";

class Application {

    avengersHtml:string;
    avengersDiv:any;
    avengersList:Array<IAvenger>;

    constructor(avengersService:AvengersService) {
        this.avengersHtml = '';
        this.avengersList = avengersService.getUsers();
        this.avengersDiv = document.getElementById('avengersDiv');
    }

    run() {
        this.avengersList.forEach((avenger, index) => {
            this.avengersHtml += this.createListHtml(avenger);
        });
        this.avengersDiv.innerHTML = this.avengersHtml;
    }

    private createListHtml(avenger:IAvenger) {
        return `<li class="list-group-item">
                  <p><strong>${avenger.firstName} ${avenger.lastName}</strong></p>
                  <p>${avenger.email}</p>
                  <p>${avenger.city} ${avenger.state}, ${avenger.zip}</p>
                </li>
                    `;
    }
}

let app = new Application(new AvengersService());
app.run();
