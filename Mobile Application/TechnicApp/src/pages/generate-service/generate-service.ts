import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Generate } from '../../providers/generate';
import { FileChooser } from '@ionic-native/file-chooser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UUID } from 'angular2-uuid';
        

@IonicPage()
@Component({
  selector: 'page-generate-service',
  templateUrl: 'generate-service.html',
})
export class GenerateService {

    tabBarElement : any;
    product : any;
    uri : any;
    myFormGenerate: FormGroup;
    myIcon: string = "md-add-circle";
    coords_location = "";
    imageName : any;
    location : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public generate: Generate, 
              private fileChooser: FileChooser, private builder: FormBuilder,private geolocation: Geolocation,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

     this.myFormGenerate = builder.group({
          'serviceType': '',
          'paymentMethod': '',
          'location': false
        });

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.product = navParams.get('product');
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateService');
  }

  ionViewWillEnter(){
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.tabBarElement.style.display = 'none';
  }
  
  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }
  
  takeImage(){
       this.fileChooser.open().then(uri => 
        this.uri = uri
       ).catch(e => 
       alert("error : "+e)
       );
  }

  saveLocation(event:any){
    if(event.checked){
      this.geolocation.getCurrentPosition().then((resp) => {
      this.coords_location = "latitude =>"+resp.coords.latitude+" longitude =>"+resp.coords.longitude;
        console.log("latitude =>"+resp.coords.latitude+" longitude =>"+resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
  }

  onSubmit(formData){
      console.log(formData);   
      this.imageName = ''; 

      if(!formData.location) this.coords_location="";
      if(this.uri != null) this.generate.upload(this.uri,this.imageName = UUID.UUID()+".jpg");
      
      this.presentLoading();
      setTimeout(() => {
          this.generate.generateService(formData.paymentMethod,formData.serviceType,this.imageName,this.coords_location,this.product.id).subscribe(
                data => {
                    console.log(data);
                    if(data=='0'){
                      let alert = this.alertCtrl.create({
                        title: 'The service has been generated!',
                        subTitle: 'Now you can check on services view!',
                        buttons: ['OK']
                      });
                      alert.present();
                      this.navCtrl.pop();
                      //this.navCtrl.setRoot(Login);

                    }else{
                       let alert = this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: 'Error to generate a service!',
                        buttons: ['OK']
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
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

}