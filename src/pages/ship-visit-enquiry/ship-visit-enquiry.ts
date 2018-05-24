import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';
import { AlertProvider } from '../../providers/alert/alert';
@Component({
  selector: 'page-ship-visit-enquiry',
  templateUrl: 'ship-visit-enquiry.html',
})
export class ShipVisitEnquiryPage {
  searchForm: FormGroup;
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
      this.commonRequestServiceProvider.shipVisitEnquiry(form.value);
    } else {
      this.alert.showAlert("Error", "SCN or VesselName or Booking Date is required");
    }
  }

}
