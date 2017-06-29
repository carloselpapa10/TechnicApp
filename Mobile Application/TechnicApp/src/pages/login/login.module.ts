import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';

import {DictionaryModule} from '../../modules/dictionary/dictionary.module';

@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    DictionaryModule,
    IonicPageModule.forChild(Login),
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
