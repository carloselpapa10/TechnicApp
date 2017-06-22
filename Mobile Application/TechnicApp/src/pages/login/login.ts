import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Auth } from '../../providers/auth';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import { Register } from '../register/register';
import { Recovery } from '../recovery/recovery';
import { Hometab } from '../hometab/hometab';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

    loader:any;
    myFormLogin: FormGroup;
    private myData: any;
    submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private builder: FormBuilder, 
              public loadingCtrl: LoadingController, public auth: Auth, public storage: Storage, 
              public alertCtrl: AlertController) {

                console.log("constructor");
        this.myFormLogin = builder.group({
          'username': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(10) ,Validators.required, Validators.pattern('[a-zA-Z]*')])],
          'password': ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10),Validators.required])],
        });
                
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }

        this.autoLogin();
        //logger
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  ngOnInit(){
    console.log("ngOnInit");
  }
  
  save(formData) {

    this.submitAttempt = true;

    if(!this.myFormLogin.valid){
      console.log("it is not valid");
      return null;
    } 

    this.presentLoading(); 
    
    this.auth.login(this.myFormLogin.controls.username.value.toLowerCase(),this.myFormLogin.controls.password.value).subscribe(
        data => {
        
            if(data[0].error==0){
                this.storage.ready().then(() => {            
                   this.storage.set('user', data[0]);        
                 });
                 this.navCtrl.setRoot(Hometab); 
            }else{
                this.showAlertLogin();
            }   
                
            },
            err => {
                console.log(err);
            }
        );
        
        this.loader.dismiss();
  }
  
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }
  
  showAlertLogin() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Error! username or password wrong...',
      buttons: ['OK']
    });
    alert.present();
  }
  
  autoLogin(){
    this.presentLoading(); 

    this.storage.ready().then(() => {      
       this.storage.get('user').then((val) => {
          if(val != "")
          this.navCtrl.setRoot(Hometab);
       })
     });

    this.loader.dismiss();
  }
  
  goToRegister(){
    this.navCtrl.push(Register);
  }
  
  goToRecovery(){
    this.navCtrl.push(Recovery);
  }  

}
