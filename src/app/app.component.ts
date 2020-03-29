import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';
  // loading = true;
  constructor(
              private authService: UserService,
              private router: Router) {
    // router.events.subscribe((routerevent: Event) => {
    //   this.checkRouterEvent(routerevent);
    // });
}
}
