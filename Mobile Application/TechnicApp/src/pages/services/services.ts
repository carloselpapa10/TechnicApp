import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Service } from '../../providers/service';
import { ServicePage } from '../service-page/service-page';

import {DictionaryService} from '../../modules/dictionary/providers/dictionary.service';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class Services {

  host : any;
  user : any;
  services : any;
  tDictionary : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private service: Service,
              public sDictionary: DictionaryService) {
    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
        this.host = val;        
       }),
       storage.get('user').then((val) => {
            this.user = val;

            this.service.serviceList(this.host, this.user.id).subscribe(
                data => {
                   this.services =data;
                },
                err => {
                    console.log(err);
                }
            );
       })
     });
     this.tDictionary = sDictionary;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Services');
  }

  ionViewWillEnter(){
    if(this.host!=null && this.user != null){
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
              this.user = val;

              this.service.serviceList(this.host, this.user.id).subscribe(
                  data => {
                    this.services =data;
                  },
                  err => {
                      console.log(err);
                  }
              );
        })
      });
    }
  }

  selectedItem(service){
    console.log(service);
    this.navCtrl.push(ServicePage, {
      service: service
    });
  }

}
