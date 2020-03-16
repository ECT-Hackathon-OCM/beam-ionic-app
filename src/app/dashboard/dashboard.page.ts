import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private menu: MenuController
    ) { }

  ngOnInit() {
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  

}
