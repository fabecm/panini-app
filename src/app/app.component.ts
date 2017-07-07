import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
import { FilteredPage } from '../pages/filtered/filtered';

import { PaniniService } from '../services/panini.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  categories;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, oneSignal: OneSignal, private paniniService: PaniniService) {
    paniniService
      .getCategories()
      .then(categoryList => this.categories = categoryList.json());
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      if (platform.is('core')){
        return;
      }

      oneSignal.startInit('6d44aa00-5d6c-4928-a11b-e65f21e9901f', '914414595890');
      oneSignal.endInit();
    });
  }

  goToHome () {
    this.rootPage = HomePage;
  }
  goToFiltered (idCategoria: Number) {
    this.paniniService.activeCategory = idCategoria;
    this.rootPage = FilteredPage;
  }
}

