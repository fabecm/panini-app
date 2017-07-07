import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Panino } from '../../interfaces/panino';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  panino: Panino;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.panino = navParams.get('panino');
  }

}
