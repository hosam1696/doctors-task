import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.page.html',
  styleUrls: ['./doctor-page.page.scss'],
})
export class DoctorPagePage implements OnInit {

  constructor(public navController: NavController) {
  }

  ngOnInit() {
  }

  goBack() {
    this.navController.back({animated: true});
  }
}
