import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Auth } from '../../providers/auth';
import { UsernameValidator } from  '../../validators/username';
import { EmailValidator }    from  '../../validators/email-validator';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  myFormRegister: FormGroup;
  categoryList : any;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder,
              private auth: Auth,public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
                
    this.myFormRegister = builder.group({
          'id': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10) ,Validators.required, Validators.pattern('([0-9]*)')])],
          'name': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(10) ,Validators.required, Validators.pattern('[a-zA-Z]*')])],
          'lastname': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(10) ,Validators.required, Validators.pattern('[a-zA-Z]*')])],
          'username': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(10) ,Validators.required, Validators.pattern('[a-zA-Z]*')])],
          'password': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10),Validators.required])],
          'email': ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
          'id_category': ['', Validators.compose([Validators.required])]
        });

        this.auth.categoryList().subscribe(
          data => {
            this.categoryList = data;
            console.log(data);
          });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  save(formData){

    this.submitAttempt = true;
    
    if(!this.myFormRegister.valid){
      console.log("it is not valid");
      return null;
    } 
    
    this.presentLoading();
    this.auth.register(this.myFormRegister.controls.id.value,this.myFormRegister.controls.name.value.toLowerCase(),this.myFormRegister.controls.lastname.value.toLowerCase(),this.myFormRegister.controls.username.value.toLowerCase(),this.myFormRegister.controls.password.value,this.myFormRegister.controls.email.value,this.myFormRegister.controls.id_category.value).subscribe(
      data => {
        console.log(data);
        if(data=='0'){
          let alert = this.alertCtrl.create({
            title: 'Register!',
            subTitle: 'The user has been registered!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        }else{
          let alert = this.alertCtrl.create({
            title: 'Register!',
            subTitle: 'Error! The user has not been registered!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        }
      }
    );
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

}
