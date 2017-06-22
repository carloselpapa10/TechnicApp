import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recovery } from './recovery';

@NgModule({
  declarations: [
    Recovery,
  ],
  imports: [
    IonicPageModule.forChild(Recovery),
  ],
  exports: [
    Recovery
  ]
})
export class RecoveryModule {}
