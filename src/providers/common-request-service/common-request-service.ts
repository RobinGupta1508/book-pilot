import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonRequestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonRequestServiceProvider {
  apiEndpoint = 'https://mtos.kuantanport.com.my/kpcmtos/api';
  config = {
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    };
  constructor(public http: HttpClient) {
    console.log('Hello CommonRequestServiceProvider Provider');
  }

  login(inputData){
    const requestData ='userName='+inputData.userName+'&password='+inputData.password;
    const apiUrl = this.apiEndpoint + '/login';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl, requestData, this.config)
        .toPromise().then(response => {
          console.log("Response of login", response);
        }).catch(err =>{
          console.log("fall in catch block", err);
        })
    });
    return promise;
  }


  shipVisitEnquiry(data){
    let searchData = `userId=${data.userId}`;
    searchData = data.scn ?  searchData + `&scn=${data.scn}` : searchData;
    searchData = data.vslName ?  searchData + `&vesselName=${data.vslName}` : searchData;
    searchData = data.date ?  searchData + `&bookingDate=${data.date}` : searchData;
    searchData = data.status ?  searchData + `&bookingStatus=${data.status}` : searchData;
    searchData = data.pilotControlFlag ?  searchData + `&pilotControl=${data.pilotControlFlag}` : searchData;
    const apiUrl = this.apiEndpoint + '/vesselenquirylist';
    let promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl, searchData, this.config)
        .toPromise().then(response => {
          console.log("Response of vessele enquiry searchs", response);
        }).catch(err =>{
          console.log("fall in catch block", err);
        })
    });
    return promise;
    
    
  }

}
