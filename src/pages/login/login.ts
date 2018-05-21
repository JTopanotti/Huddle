import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  //ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController) {

  }

}
