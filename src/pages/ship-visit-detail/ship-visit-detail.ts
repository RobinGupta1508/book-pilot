import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShipVisitDetailCardPage } from '../ship-visit-detail-card/ship-visit-detail-card';

@Component({
  selector: 'page-ship-visit-detail',
  templateUrl: 'ship-visit-detail.html',
})
export class ShipVisitDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipVisitDetailPage');
  }

}
