import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hometab } from './hometab';

@NgModule({
  declarations: [
    Hometab,
  ],
  imports: [
    IonicPageModule.forChild(Hometab),
  ]
})
export class HometabModule {}
