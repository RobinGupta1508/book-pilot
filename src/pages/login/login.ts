import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { LoaderServiceProvider } from '../../providers/loader-service/loader-service';
import { AlertProvider } from '../../providers/alert/alert';
import { CommonRequestServiceProvider } from '../../providers/common-request-service/common-request-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm : FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private loaderService: LoaderServiceProvider, private alertService: AlertProvider, private commonRequestServiceProvider: CommonRequestServiceProvider) {
      this.buildForm();
  }

  buildForm(){
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
  
  login(){
    console.log(this.loginForm);
    if(this.loginForm.valid){
      this.commonRequestServiceProvider.login(this.loginForm.value);
      this.loaderService.showLoader();
      this.navCtrl.setRoot(HomePage);
      this.loaderService.hideLoader();
    }else{
      this.alertService.showAlert("Error", "Both fields are required");
    }
  }

}
