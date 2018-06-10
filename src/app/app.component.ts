import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ShipVisitEnquiryPage } from '../pages/ship-visit-enquiry/ship-visit-enquiry';
import { BookingRequestPage } from '../pages/booking-request/booking-request';
import { PilotControlPage } from '../pages/pilot-control/pilot-control';
import { BookingStatusEnquiryPage } from '../pages/booking-status-enquiry/booking-status-enquiry';
import { AlertProvider } from '../providers/alert/alert';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  userData;

  menus: Array<{ title: string, page: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,  private storage: Storage, private alert: AlertProvider) {
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
      this.storage.get('userData').then((userData) => {
        this.userData = userData;
        if (userData) {
          console.log(userData);
          this.nav.setRoot(HomePage);
        }
      })

    });
  }

  onMenuClick(menu) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (menu.title == 'Ship Visit Enquire' || menu.title == 'Booking Status Enquiry') {
      if (!this.userData || !this.userData.accessRights.bookingList) {
        this.showAuthenticationAlert();
        this.redirectToHome();

      } else {
        this.nav.setRoot(menu.page);
      }
    } else if (menu.title == 'Booking Request') {
      if (!this.userData ||(this.userData.pilotUser === true || (this.userData.pilotUser === false && this.userData.accessRights.bookingEdit === false)) ) {
        this.showAuthenticationAlert();
        this.redirectToHome();
      } else {
        this.nav.setRoot(menu.page);
      }
    } else if (menu.title === 'Pilot Control') {
      if (!this.userData ||(this.userData.pilotUser === false || (this.userData.pilotUser === true && this.userData.accessRights.bookingPilotControl === false)) ) {
        this.showAuthenticationAlert();
        this.redirectToHome();
      } else {
        this.nav.setRoot(menu.page);
      }
    } else if (menu.title == 'Logout') {
      this.storage.remove("userData");
      this.nav.setRoot(LoginPage);
    }else{
      this.redirectToHome();
    }

  }

  redirectToHome() {
    this.nav.setRoot(HomePage);
  }

  showAuthenticationAlert() {
    this.alert.showAlert('No Access Rights !', 'You do not have sufficient permissions to access this page');
  }
}
