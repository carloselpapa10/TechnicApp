import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Service } from '../../providers/service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service-page',
  templateUrl: 'service-page.html',
})

export class ServicePage {

  service : any;
  host : any;
  user : any;
  myFormService: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvider : Service, 
    public storage: Storage, private builder: FormBuilder, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController) {
    this.service = navParams.get('service');

    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
        this.host = val; 
        console.log("hostserver : "+val);       
       }),
       storage.get('user').then((val) => {
            this.user = val;
            console.log("user : "+val);
       })
     });

     this.myFormService = builder.group({
          'message': ['', Validators.compose([Validators.required])]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  ngAfterViewInit(){
  }

  sendMessage(formData){
    this.submitAttempt = true;
    if(!this.myFormService.valid){
      console.log("it is not valid");
      return null;
    }
    
    this.presentLoading();
    this.serviceProvider.addComment(this.host,this.user.id,this.service.id,this.myFormService.controls.message.value).subscribe(
      data => {
        console.log(data);
        if(data=='0'){
          let alert = this.alertCtrl.create({
            title: 'Service!',
            subTitle: 'The message has been sent!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        }else{
          let alert = this.alertCtrl.create({
            title: 'Service!',
            subTitle: 'Error! The message has not been sent!',
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
