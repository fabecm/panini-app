import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OneSignal } from '@ionic-native/onesignal';

import { HttpModule } from '@angular/http';

import { PaniniService } from '../services/panini.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { FilteredPage } from '../pages/filtered/filtered';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    FilteredPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    FilteredPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    PaniniService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
