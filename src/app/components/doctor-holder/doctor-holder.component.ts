import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-doctor-holder',
  templateUrl: './doctor-holder.component.html',
  styleUrls: ['./doctor-holder.component.scss'],
})
export class DoctorHolderComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onTap = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    // console.log('hey');
    this.onTap.emit(null);
  }
}
