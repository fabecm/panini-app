import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaniniService } from '../../services/panini.service';

import { DetailPage } from '../detail/detail';

import { Panino } from '../../interfaces/panino';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  paniniList: Panino[];
  constructor(public navCtrl: NavController, private paniniService: PaniniService) {
    paniniService.getData().then(articleList => {
      this.paniniList = articleList.json() as Panino[];
      console.log(this.paniniList);
    })
  }

  goToDetail (panino: Panino){
    this.navCtrl.push(DetailPage, {
      panino: panino
    })
  }

}
