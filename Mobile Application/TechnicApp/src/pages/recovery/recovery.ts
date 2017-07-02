import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {DictionaryService} from '../../modules/dictionary/providers/dictionary.service';

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class Recovery {

  myFormRecovery: FormGroup;
  submitAttempt: boolean = false;
  tDictionary : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder, 
              public loadingCtrl: LoadingController, public auth: Auth, public storage: Storage, public sDictionary: DictionaryService, 
              public alertCtrl: AlertController) {

    this.myFormRecovery = builder.group({
          'id': ['', Validators.compose([Validators.required,Validators.pattern('([0-9]*)')])]         
        });
        this.tDictionary = sDictionary;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Recovery');
  }

  recovery_password(formData){
    this.submitAttempt = true;
    
    if(!this.myFormRecovery.valid){
      console.log("it is not valid");
      return null;
    }

    this.presentLoading();
    this.auth.recoveryPassword(this.myFormRecovery.controls.id.value).subscribe(
      data => {
        console.log(data);
        if(data.new_password != "0"){
          let alert = this.alertCtrl.create({
            title: this.tDictionary.get("RECOVERY")+'!',
            subTitle: this.tDictionary.get("TEXT_REC_NEW_PWD")+data.new_password,
            buttons: [this.tDictionary.get("OKC")]
          });
          alert.present();
          this.navCtrl.pop();
        }else{
          console.log("holoo");
          let alert = this.alertCtrl.create({
            title: this.tDictionary.get("RECOVERY")+'!',
            subTitle: this.tDictionary.get("TEXT_REC_ERR_NEW_PWD"),
            buttons: [this.tDictionary.get("OKC")]
          });
          alert.present();
        }
      }
    );
  }

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: this.tDictionary.get("WAIT"),
      duration: 2000
    });
    loader.present();
  }
}
