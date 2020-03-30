import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showTab: boolean;
  constructor(private UserService: UserService) {
    this.showTab = UserService.isAdmin;
   }

  ngOnInit(): void {
  }

}
