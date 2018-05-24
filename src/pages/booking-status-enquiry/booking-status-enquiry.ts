import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShipVisitDetailPage } from '../ship-visit-detail/ship-visit-detail';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';

@Component({
  selector: 'page-booking-status-enquiry',
  templateUrl: 'booking-status-enquiry.html',
})
export class BookingStatusEnquiryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonRequestServiceProvider: CommonRequestServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingStatusEnquiryPage');
  }

  ionViewWillEnter(){
    this.commonRequestServiceProvider.getStatusEnquire({userId: 1})
      .then(data => {
        console.log("Status enquiry", data);
      }).catch(err => {
        console.log("error in fetch record ", err);
      })
  }

  enquiryClick(){
    this.navCtrl.push(ShipVisitDetailPage);
  }

}
