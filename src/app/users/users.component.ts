import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, map, take } from 'rxjs';
import { User } from './users.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnDestroy {
  users$: Observable<User[]>;
  counter = 0;
  counterSubscription : Subscription
constructor(private usersService: UsersService) {
  this.users$ = this.usersService.getUsers();
  this.counterSubscription = this.usersService.getCounter().pipe(
    take(11),
    map((v) => v * 3),
  ).subscribe({
    next: (v) => {
      this.counter = v;
    }
  })

}

ngOnDestroy(): void {
  // Cancela la suscripción en ngOnDestroy para liberar recursos
  this.counterSubscription.unsubscribe();
  }
}
