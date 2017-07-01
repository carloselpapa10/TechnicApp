import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingProvider } from '../../providers/setting-provider';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DictionaryService } from '../../modules/dictionary/providers/dictionary.service';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})

export class ChangePassword {

  Setting: any;
  host: any;
  user: any;
  myFormChangePassword: FormGroup;
  submitAttempt: boolean = false;
  errorPassword: any;
  tDictionary: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private setting: SettingProvider,
    public storage: Storage, private builder: FormBuilder, public loadingCtrl: LoadingController, public sDictionary: DictionaryService,
    public alertCtrl: AlertController) {
    this.Setting = navParams.get('setting');

    storage.ready().then(() => {
      storage.get('hostserver').then((val) => {
        this.host = val;
        console.log("hostserver : " + val);
      }),
        storage.get('user').then((val) => {
          this.user = val;
          console.log("user : " + val);
        })
    });
    this.tDictionary = sDictionary;
    console.log(sDictionary);
    
    this.myFormChangePassword = builder.group({
      'password1': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10), Validators.required])],
      'password2': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10), Validators.required])],
      'password3': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10), Validators.required])]
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePassword');
  }

  ngAfterViewInit() {
  }


  save() {
    this.submitAttempt = true;
    this.errorPassword = null;

    if (!this.myFormChangePassword.valid) {
      console.log("it is not valid");
      return null;
    }

    if (this.myFormChangePassword.controls.password2.value != this.myFormChangePassword.controls.password3.value) {
      console.log("password no equals");
      this.errorPassword = this.tDictionary.get("VAL_PASS_REPEAT");
      return null;
    }

    this.presentLoading();
    setTimeout(() => {
      this.setting.changePassword(this.user.id, this.myFormChangePassword.controls.password1.value, this.myFormChangePassword.controls.password2.value, this.host).subscribe(
        data => {
          console.log(data);
          if (data == '0') {
            let alert = this.alertCtrl.create({
              title: this.tDictionary.get("SUCCESS"),
              subTitle: this.tDictionary.get("YES_CHAGE_PASS"),
              buttons: [this.tDictionary.get("OKC")]
            });
            alert.present();
            this.navCtrl.pop();

          } else {
            let alert = this.alertCtrl.create({
              title: this.tDictionary.get("ERROR"),
              subTitle: this.tDictionary.get("NO_CHAGE_PASS"),
              buttons: [this.tDictionary.get("OKC")]
            });
            alert.present();
          }
        },
        err => {
          console.log(err);
        }
      )
    }, 1000);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: this.tDictionary.get("WAIT"),
      duration: 2000
    });
    loader.present();
  }

}