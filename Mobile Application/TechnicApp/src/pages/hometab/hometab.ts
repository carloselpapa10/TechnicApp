import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Products } from '../products/products';
import { Services } from '../services/services';
import { Comments } from '../comments/comments';
import { Setting } from '../setting/setting';

/**
 * Generated class for the Hometab tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html'
})
@IonicPage()
export class Hometab {

  tab1Root: any = Products;
  tab2Root: any = Services;
  tab3Root: any = Comments;
  tab4Root: any = Setting;

  constructor(public navCtrl: NavController) {}

}
