import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShipVisitDetailPage } from '../ship-visit-detail/ship-visit-detail';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';
import { AlertProvider } from '../../providers/alert/alert';
@Component({
  selector: 'page-booking-status-enquiry',
  templateUrl: 'booking-status-enquiry.html',
})
export class BookingStatusEnquiryPage {
  bookingList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private commonRequestServiceProvider: CommonRequestServiceProvider, private alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingStatusEnquiryPage');
  }

  ionViewWillEnter(){
    this.commonRequestServiceProvider.getStatusEnquire({userId: 1})
      .then((data:any) => {
        console.log("Status enquiry", data);
        this.bookingList = data.bookingStatusList;
      }).catch(err => {
        console.log("error in fetch record ", err);
      })
  }

  enquiryClick(booking){
    if(booking.bookingStatusCount > 0){
      const data = {
        pilotControlFlag:  false,
        status: booking.bookingStatus
      }
      this.commonRequestServiceProvider.shipVisitEnquiry(data).then((res:any) => {
        console.log("data recived",  res);
      })
    }else{
      this.alert.showAlert('', 'No Visits available!')
    }
    
    
  }

}
