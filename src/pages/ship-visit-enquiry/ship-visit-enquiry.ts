import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'page-ship-visit-enquiry',
  templateUrl: 'ship-visit-enquiry.html',
})
export class ShipVisitEnquiryPage {
  searchForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipVisitEnquiryPage');
  }

  buildForm(){
    this.searchForm = this.fb.group({
      scn: [''],
      vslName: [''],
      date : ['']
    })
  }

  search(){
    console.log("serach form data", this.searchForm.value)
  }

}
