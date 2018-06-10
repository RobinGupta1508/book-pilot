import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ShipVisitEnquiryPage } from '../pages/ship-visit-enquiry/ship-visit-enquiry';
import { BookingStatusEnquiryPage } from '../pages/booking-status-enquiry/booking-status-enquiry';
import { ShipVisitDetailPage } from '../pages/ship-visit-detail/ship-visit-detail';
import { ShipVisitDetailCardPage } from '../pages/ship-visit-detail-card/ship-visit-detail-card';
import { BookingRequestPage } from '../pages/booking-request/booking-request';
import { PilotControlPage } from '../pages/pilot-control/pilot-control';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoaderServiceProvider } from '../providers/loader-service/loader-service';
import { AlertProvider } from '../providers/alert/alert';
import { CommonRequestServiceProvider } from '../providers/common-request-service/common-request-service';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ShipVisitEnquiryPage,
    BookingStatusEnquiryPage,
    ShipVisitDetailPage,
    ShipVisitDetailCardPage,
    BookingRequestPage,
    PilotControlPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ShipVisitEnquiryPage,
    BookingStatusEnquiryPage,
    ShipVisitDetailPage,
    BookingRequestPage,
    PilotControlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaderServiceProvider,
    AlertProvider,
    CommonRequestServiceProvider
  ]
})
export class AppModule {}
