import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHomes$(){

    // @todo add a real HTTP call to get homes.
    return of([]);
  }
}
