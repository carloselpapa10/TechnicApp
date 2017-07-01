import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { ChangePassword } from '../change-password/change-password';
import { Storage } from '@ionic/storage';
import { App } from 'ionic-angular';
import { Generate } from '../../providers/generate';

import { AlertController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { UUID } from 'angular2-uuid';
import { LoadingController } from 'ionic-angular';

import { SettingProvider } from '../../providers/setting-provider';

import { DictionaryService } from '../../modules/dictionary/providers/dictionary.service';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {

  host: any;
  user: any;
  categoryList: any;
  id_category: any;
  uri: any;
  imageName: any;
  myIcon: string = "md-add-circle";
  passIcon: string = "md-key";
  tDictionary: any;

  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public generate: Generate, public loadingCtrl: LoadingController,
    public app: App, private settingProvider: SettingProvider, public alertCtrl: AlertController, private fileChooser: FileChooser, public sDictionary: DictionaryService) {

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
    this.tDictionary = sDictionary;
    console.log(sDictionary);

  }

  ionViewWillEnter(){
    if(this.host!=null && this.user != null){
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
              this.user = val;
        })
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }

  logout() {
    this.storage.ready().then(() => {
      this.storage.set('user', '');
    });
    this.app.getRootNav().setRoot(Login);
    //this.navCtrl.rootNav.setRoot(Login);
  }

  onChangeCategory(id) {
    console.log(id);
    if (id == this.user.id_category) return;
    this.settingProvider.changeCategory(id, this.host, this.user.id).subscribe(
      data => {
        this.user.id_category = id;
        this.storage.ready().then(() => {
          this.storage.set('user', this.user);
        });

        let alert = this.alertCtrl.create({
          title: this.tDictionary.get("TITLE_CATEGORY"),
          subTitle: this.tDictionary.get("SUB_CATEGORY"),
          buttons: [this.tDictionary.get("OKC")]
        });
        alert.present();
      },
      err => {
        console.log(err);
      }
    );
  }

  uploadImage(uri){
    this.imageName = UUID.UUID()+ ".jpg";
    this.settingProvider.upload(uri, this.imageName, this.host);
    
    this.presentLoading();

    setTimeout(() => {
      this.settingProvider.changePhoto(this.user.id, this.imageName, this.host).subscribe(
              data => {
                  console.log(data);
                  this.user.photo = this.imageName;
                    
                  this.storage.ready().then(() => {
                    this.storage.set('user', this.user);
                  }); 

                  if (data == '0') {
                    let alert = this.alertCtrl.create({
                      title: this.tDictionary.get("SUCCESS"),
                      subTitle: this.tDictionary.get("YES_PIC_CHANGED"),
                      buttons: [this.tDictionary.get("OKC")]
                    });
                    alert.present();  

                  } else {
                    let alert = this.alertCtrl.create({
                      title: this.tDictionary.get("ERROR"),
                      subTitle: this.tDictionary.get("NO_PIC_CHANGED"),
                      buttons: [this.tDictionary.get("OKC")]
                    });
                    alert.present();
                  }
                },
                err => {
                  alert("error second"+err);
                  console.log(err);
                }            
        );
    },1000);

    this.loader.dismiss();
  }

  takeImage() {    
    this.fileChooser.open().then(uri => 
        this.uploadImage(uri)
    ).catch(e => 
      alert("error : "+e)
    );  

  }


  changePassword() {
    console.log('change password');
    this.navCtrl.push(ChangePassword, {
      changePassword: this.tDictionary.get("TITLE_CHANGE_PASS_PAGE")
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: this.tDictionary.get("WAIT"),
      duration: 3000
    });
    this.loader.present();
  }

}
