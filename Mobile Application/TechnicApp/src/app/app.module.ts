import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { FileChooser } from '@ionic-native/file-chooser';
import { Transfer } from '@ionic-native/transfer';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Recovery } from '../pages/recovery/recovery';

import { Hometab } from '../pages/hometab/hometab';

import { Products } from '../pages/products/products';
import { Services } from '../pages/services/services';
import { Comments } from '../pages/comments/comments';
import { Setting } from '../pages/setting/setting';
import { ChangePassword } from '../pages/change-password/change-password';
import { GenerateService } from '../pages/generate-service/generate-service';
import { ServicePage } from '../pages/service-page/service-page';

import { Auth } from '../providers/auth';
import { Product } from '../providers/product';
import { Generate } from '../providers/generate';
import { Service } from '../providers/service';
import { Comment } from '../providers/comment';
import { SettingProvider } from '../providers/setting-provider';

//My Modules
import {DictionaryModule} from '../modules/dictionary/dictionary.module'

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    Recovery,
    Hometab,
    Products,
    Services,
    Comments,
    Setting,
    GenerateService,
    ServicePage,
    ChangePassword
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DictionaryModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Register,
    Recovery,
    Hometab,
    Products,
    Services,
    Comments,
    Setting,
    GenerateService,
    ServicePage,
    ChangePassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    Transfer,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Auth,Product,Generate,Service,Comment,SettingProvider
  ]
})
export class AppModule {}
