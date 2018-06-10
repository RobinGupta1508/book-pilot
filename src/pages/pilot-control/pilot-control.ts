import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';
import { AlertProvider } from '../../providers/alert/alert';
@Component({
  selector: 'page-pilot-control',
  templateUrl: 'pilot-control.html',
})
export class PilotControlPage {
  bookingList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private commonRequestServiceProvider: CommonRequestServiceProvider, private alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilotControlPage');
  }

  ionViewWillEnter(){
    const data = {
      pilotControlFlag: true
    };
    this.commonRequestServiceProvider.shipVisitEnquiry(data).then((res: any)=>{
      console.log("pilot control result", res);
      this.bookingList = res.bookingList;
      if(this.bookingList && this.bookingList.length == 0){
        this.alert.showAlert("","No Records Found!!");
      }
    })
  }

}
