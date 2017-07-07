import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilteredPage } from './filtered';

@NgModule({
  declarations: [
    FilteredPage,
  ],
  imports: [
    IonicPageModule.forChild(FilteredPage),
  ],
  exports: [
    FilteredPage
  ]
})
export class FilteredPageModule {}
