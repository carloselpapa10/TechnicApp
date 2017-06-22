import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Products } from './products';

@NgModule({
  declarations: [
    Products,
  ],
  imports: [
    IonicPageModule.forChild(Products),
  ],
  exports: [
    Products
  ]
})
export class ProductsModule {}
