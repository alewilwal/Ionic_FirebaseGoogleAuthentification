import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleplus:GooglePlus) {

  }

  login(){
    this.googleplus.login({
      'webClientId':'663493846918-79tfaq6ippdibofn03iu7pr35q8ofece.apps.googleusercontent.com', 
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc=>{
        alert("Login ok !")
      }).catch(ns=>{
        alert("Login bad !")
      })
    })
  }

}
