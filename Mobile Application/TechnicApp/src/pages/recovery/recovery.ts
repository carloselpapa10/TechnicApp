import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Recovery page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class Recovery {

  myFormRecovery: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder, 
              public loadingCtrl: LoadingController, public auth: Auth, public storage: Storage, 
              public alertCtrl: AlertController) {

    this.myFormRecovery = builder.group({
          'username': ['', Validators.compose([Validators.required])]         
        });
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
  }

}
