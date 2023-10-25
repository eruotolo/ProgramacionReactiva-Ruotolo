import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';


export interface User {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getCounter(): Observable<number> {
    return interval(1000);
  }
  getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'Mariano'
        },
        {
          id: 2,
          name: 'Ignacio'
        },
        {
          id: 3,
          name: 'Enzo',
        },
        {
          id: 4,
          name: 'Victoria',
        }
      ])
    })

  }
}
