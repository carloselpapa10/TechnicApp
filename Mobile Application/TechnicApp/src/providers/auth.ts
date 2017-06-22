import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class Auth {

    host : any;

  constructor(public http: Http,storage: Storage) {
    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
            this.host = val;
       })
     });
  }

  register(sId,sName,sLastname,sUsername,sPassword,sEmail,sId_category){  
    var url = this.host+'/Register.php?sId='+sId+'&sName='+sName+'&sLastname='+sLastname+'&sUsername='+sUsername+'&sPassword='+sPassword+'&sPhone=&sPhoto=fotoDefecto.png&sEmail='+sEmail+'&sAddress=LAquila&sId_category='+sId_category;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  
  login(usr,pwd){  
    var url = this.host+'/Login.php?sUsername='+usr+'&sPassword='+pwd;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  categoryList(){
    var url = this.host+'/CategoryList.php';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
