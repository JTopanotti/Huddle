import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as firebase from 'firebase';


@Component({
  selector: 'page-registor',
  templateUrl: 'register.html'
})
export class RegisterPage {
  newUser = {email: "", password: ""};
  ref = firebase.database().ref('users/');

  constructor(public navCtrl: NavController) {

  }

  addUser(){
    this.ref.push(this.newUser);
  }

}
