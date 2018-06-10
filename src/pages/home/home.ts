import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { ShipVisitEnquiryPage } from '../ship-visit-enquiry/ship-visit-enquiry';
import { BookingStatusEnquiryPage } from '../booking-status-enquiry/booking-status-enquiry';
import { BookingRequestPage } from '../booking-request/booking-request';
import { PilotControlPage } from '../pilot-control/pilot-control';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageLinks = [];
  userData;
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.pageLinks = [
      {
        title:  'Ship Visit Enquire',
        page: ShipVisitEnquiryPage
      },
      {
        title: 'Booking Status Enquiry',
        page: BookingStatusEnquiryPage
      },{
        title: 'Booking Request',
        page: BookingRequestPage
      },{
        title: 'Pilot Control',
        page: PilotControlPage
      }
    ];
    
  }

  ionViewDidLoad(){
    this.storage.get("userData").then((userData)=>{
      this.userData = userData;
    })
  }

  linkClick(pageDetail){
    this.navCtrl.setRoot(pageDetail.page);
  }



}
