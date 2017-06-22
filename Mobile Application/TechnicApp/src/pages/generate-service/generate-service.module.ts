import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateService } from './generate-service';

@NgModule({
  declarations: [
    GenerateService,
  ],
  imports: [
    IonicPageModule.forChild(GenerateService),
  ],
  exports: [
    GenerateService
  ]
})
export class GenerateServiceModule {}
