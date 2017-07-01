import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Products } from '../products/products';
import { Services } from '../services/services';
import { Comments } from '../comments/comments';
import { Setting } from '../setting/setting';
import {DictionaryService} from '../../modules/dictionary/providers/dictionary.service';


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

  tDictionary : any;

  constructor(public navCtrl: NavController, public sDictionary: DictionaryService) {
    this.tDictionary = sDictionary;
  }

}
