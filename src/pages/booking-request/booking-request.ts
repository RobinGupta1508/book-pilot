import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-booking-request',
  templateUrl: 'booking-request.html',
})
export class BookingRequestPage {
  bookingForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingRequestPage');
  }

  buildForm(){
    this.bookingForm = this.fb.group({
      scn: [''],
      moveType: [''],
      date : ['']
    })
  };

  saveBooking(){
    
  }

}
