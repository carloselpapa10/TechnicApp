import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingProvider {

  constructor(public http: Http) {    
  }

  categoryList(host){
    var url = host+'/CategoryList.php';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  changeCategory(idCategory,host,sId_user){
    var url = host+'/ChangeCategory.php?sId_user='+sId_user+'&sIdCategory='+idCategory;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
