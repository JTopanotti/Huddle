import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as firebase from 'firebase';


@Component({
  selector: 'page-registor',
  templateUrl: 'register.html'
})
export class RegisterPage {
  newUser = {email: "", password: ""};
  //ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController) {

  }

  addUser(){
    firebase.auth().createUserWithEmailAndPassword(
      this.newUser.email, this.newUser.password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`ERROR: error code ${errorCode}: ${errorMessage}`);
      });
  }

}
