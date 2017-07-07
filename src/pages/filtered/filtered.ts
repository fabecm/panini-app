import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PaniniService } from '../../services/panini.service';

import { Panino } from '../../interfaces/panino';

import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-filtered',
  templateUrl: 'filtered.html',
})
export class FilteredPage {

  paniniList: Panino[];
  constructor(public navCtrl: NavController, private paniniService: PaniniService) {
    paniniService.getFiltered().then(articleList => {
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
