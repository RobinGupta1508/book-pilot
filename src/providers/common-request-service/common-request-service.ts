import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertProvider } from '../alert/alert';
import { LoaderServiceProvider } from '../loader-service/loader-service';
/*
  Generated class for the CommonRequestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonRequestServiceProvider {
  apiEndpoint = 'http://211.24.105.178/mtos/api';
  config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    }
  };
  userData: any = {};
  constructor(public http: HttpClient, private alert: AlertProvider, private loaderServiceProvider: LoaderServiceProvider) {
    console.log('Hello CommonRequestServiceProvider Provider');
  }

  login(inputData) {
    this.loaderServiceProvider.showLoader();
    const requestData = 'userName=' + inputData.userName + '&password=' + inputData.password;
    const apiUrl = this.apiEndpoint + '/login';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl, requestData, this.config)
        .toPromise().then((res: any) => {
          this.loaderServiceProvider.hideLoader();
          if (!res.statusDesc && res.statusCode === '00') {
            this.userData = res;
            resolve(this.userData);
          }else{
            this.alert.showAlert("Login Failed!", res.statusDesc);
          }
        }).catch(err => {
          this.loaderServiceProvider.hideLoader();
          this.alert.showAlert("Error!", "Internal Server Error");
        })
    });
    return promise;
  }


  shipVisitEnquiry(data) {
    this.loaderServiceProvider.showLoader();
    let searchData = `userId=${this.userData.userId}`;
    searchData = data.scn ? searchData + `&scn=${data.scn}` : searchData;
    searchData = data.vslName ? searchData + `&vesselName=${data.vslName}` : searchData;
    searchData = data.date ? searchData + `&bookingDate=${data.date}` : searchData;
    searchData = data.status ? searchData + `&bookingStatus=${data.status}` : searchData;
    searchData = searchData + `&pilotControl=${data.pilotControlFlag}`;
    const apiUrl = this.apiEndpoint + '/vesselenquirylist';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl, searchData, this.config)
        .toPromise().then((res:any) => {
          this.loaderServiceProvider.hideLoader();
          if (!res.statusDesc && res.statusCode === '00') {
            resolve(res);
          }else{
            this.alert.showAlert("Request Failed!", res.statusDesc);
          }
        }).catch(err => {
          this.loaderServiceProvider.hideLoader();
          this.alert.showAlert("Error!", "Internal Server Error");
        })
    });
    return promise;


  }


  getStatusEnquire(data) {
    let searchData = `userId=${this.userData.userId}`;
    const apiUrl = this.apiEndpoint + '/countbookingsbystatus';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl, searchData, this.config)
      .toPromise().then((res:any) => {
        this.loaderServiceProvider.hideLoader();
        if (!res.statusDesc && res.statusCode === '00') {
          resolve(res);
        }else{
          this.alert.showAlert("Request Failed!", res.statusDesc);
        }
      }).catch(err => {
        this.loaderServiceProvider.hideLoader();
        this.alert.showAlert("Error!", "Internal Server Error");
      })
    });
    return promise;
  }


  saveBookingRequest() {

  }
}
