import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ship-visit-detail-card',
  templateUrl: 'ship-visit-detail-card.html',
})
export class ShipVisitDetailCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipVisitDetailCardPage');
  }

}
