import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import {DictionaryService} from '../modules/dictionary/providers/dictionary.service';

@Component({
  templateUrl: 'app.html',
  providers: [DictionaryService]
})
export class MyApp {
  rootPage:any = Login;
  loader:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage,
              sDictionary: DictionaryService) {
  
    storage.ready().then(() => {
       //storage.set('hostserver', 'https://technicapp.000webhostapp.com');
       storage.set('hostserver', 'http://localhost/TechnicAppserver');
       //storage.set('hostserver', 'http://192.168.0.7/TechnicAppserver');
       //storage.set('hostserver', 'http://10.170.12.109/TechnicAppserver');
       //storage.set('hostserver', 'http://192.168.43.12/TechnicAppserver');
     });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let promises = [] as Promise<any>[];
      promises.push(sDictionary.load());
      Promise.all(promises).then(() => {
            });

            

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  
  
}

