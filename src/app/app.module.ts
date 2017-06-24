import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig={
    apiKey: "AIzaSyD009nXblqB7_U9l0vUcvsNk4tsavcOdU4",
    authDomain: "project-8572726361794678843.firebaseapp.com",
    databaseURL: "https://project-8572726361794678843.firebaseio.com",
    projectId: "project-8572726361794678843",
    storageBucket: "project-8572726361794678843.appspot.com",
    messagingSenderId: "663493846918"
}
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus
  ]
})
export class AppModule {}
