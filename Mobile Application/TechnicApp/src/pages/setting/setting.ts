import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Storage } from '@ionic/storage';
import {App} from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { SettingProvider } from '../../providers/setting-provider';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {

  host : any;
  user : any;
  categoryList : any;
  id_category : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, 
            public app: App, private settingProvider: SettingProvider, public alertCtrl: AlertController) {
              
              storage.ready().then(() => {
                storage.get('hostserver').then((val) => {
                  this.host = val;   
                  console.log(val);
                  
                  this.settingProvider.categoryList(val).subscribe(
                      data => {
                        this.categoryList = data;
                        console.log(data);
                      },
                      err => {
                          console.log(err);
                      }
                  );

                }),
                storage.get('user').then((val) => {
                      this.user = val;
                      console.log(this.user);
                })
              });
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

  logout(){
    this.storage.ready().then(() => {            
        this.storage.set('user', '');         
    });
    this.app.getRootNav().setRoot(Login);
    //this.navCtrl.rootNav.setRoot(Login);
  }

  onChangeCategory(id){
    console.log(id);
    if(id == this.user.id_category) return;
    this.settingProvider.changeCategory(id,this.host,this.user.id).subscribe(
      data => {
                this.user.id_category = id;
                this.storage.ready().then(() => {           
                   this.storage.set('user', this.user);       
                 });

                let alert = this.alertCtrl.create({
                        title: 'Category!',
                        subTitle: 'The category has been changed!',
                        buttons: ['OK']
                      });
                      alert.present();
      },
      err => {
        console.log(err);
      }
    );
  }

}
