import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';
import { AlertProvider } from '../../providers/alert/alert';
@Component({
  selector: 'page-ship-visit-enquiry',
  templateUrl: 'ship-visit-enquiry.html',
})
export class ShipVisitEnquiryPage {
  searchForm: FormGroup;
  bookingList = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder, private commonRequestServiceProvider: CommonRequestServiceProvider,
    private alert: AlertProvider) {
    this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipVisitEnquiryPage');
  }

  buildForm() {
    this.searchForm = this.fb.group({
      scn: [''],
      vslName: [''],
      date: ['']
    })
  }

  search(form) {
    let datePipe = new DatePipe("en-US");

    console.log("serach form data", this.searchForm.value);
    if (form.value.scn || form.value.vslName || form.value.date) {
      const input = form.value;
      input.date = datePipe.transform(input.date, 'MM/dd/yyyy');
      input['pilotControlFlag'] = false;
      this.commonRequestServiceProvider.shipVisitEnquiry(form.value).then((res: any)=>{
        console.log("Ship search result", res);
        this.bookingList = res.bookingList;
        if(this.bookingList && this.bookingList.length == 0){
          this.alert.showAlert("","No Records Found!!");
        }
      })
    } else {
      this.alert.showAlert("Error", "SCN or VesselName or Booking Date is required");
    }
  }

}
