import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaniniService } from '../../services/panini.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  paniniList;
  constructor(public navCtrl: NavController, private paniniService: PaniniService) {
    paniniService.getData().then(articleList => {
      this.paniniList = articleList.json();
      console.log(this.paniniList);
    })
  }

}
