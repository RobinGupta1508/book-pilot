import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShipVisitDetailPage } from '../ship-visit-detail/ship-visit-detail';

@Component({
  selector: 'page-booking-status-enquiry',
  templateUrl: 'booking-status-enquiry.html',
})
export class BookingStatusEnquiryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingStatusEnquiryPage');
  }

  enquiryClick(){
    this.navCtrl.push(ShipVisitDetailPage);
  }

}
