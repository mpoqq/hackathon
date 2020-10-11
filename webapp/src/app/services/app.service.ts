import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
    groceriesValue = 1;
    transportationValue = 1;
    barsValue = 1;
    parkingLotsValue = 1;
    restaurantsValue = 1;

    groceriesChecked = true;
    transportationChecked = true;
    barsChecked = true;
    parkingLotsChecked = true;
    restaurantsChecked = true;

    city: string;
    work = new Observable<string>();
}
