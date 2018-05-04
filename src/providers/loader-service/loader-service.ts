import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderServiceProvider {
	loader;
  constructor(private loadingCtrl: LoadingController) {
    console.log('Hello LoaderServiceProvider Provider');
  }

  showLoader() {
    this.loader = this.loadingCtrl.create({
    });
    this.loader.present();
  };

  hideLoader(){
  	this.loader.dismiss();
  }

}
