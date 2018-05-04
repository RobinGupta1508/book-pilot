import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ShipVisitEnquiryPage } from '../pages/ship-visit-enquiry/ship-visit-enquiry';
import { BookingRequestPage } from '../pages/booking-request/booking-request';
import { PilotControlPage } from '../pages/pilot-control/pilot-control';
import { BookingStatusEnquiryPage } from '../pages/booking-status-enquiry/booking-status-enquiry';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  menus: Array<{ title: string, page: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menus = [
      {
        title: 'Home',
        page: HomePage,
        icon: 'home'
      },
      {
        title: 'Ship Visit Enquire',
        page: ShipVisitEnquiryPage,
        icon: 'search'
      },
      {
        title: 'Booking Status Enquiry',
        page: BookingStatusEnquiryPage,
        icon: 'checkmark-circle'
      }, {
        title: 'Booking Request',
        page: BookingRequestPage,
        icon: 'boat'
      }, {
        title: 'Pilot Control',
        page: PilotControlPage,
        icon: 'game-controller-b'
      }, {
        title: 'Logout',
        page: LoginPage,
        icon: 'exit'
      }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onMenuClick(menu) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(menu.page);
  }
}
