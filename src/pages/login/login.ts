import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import * as firebase from 'firebase';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {email: "", password: ""};
  //ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController) {
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(
      this.user.email, this.user.password).then(user => {
        this.navCtrl.push(HomePage);
      }).catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`ERROR: error code \{${errorCode}\}: ${errorMessage}`);
    });
  }

}
