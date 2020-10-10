import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
    groceriesValue = 5;
    transportationValue = 5;
    barsValue = 5;
    parkingLotsValue = 5;
    restaurantsValue = 5;

    groceriesChecked = true;
    transportationChecked = true;
    barsChecked = true;
    parkingLotsChecked = true;
    restaurantsChecked = true;

    city: string;
    work: string;
}
