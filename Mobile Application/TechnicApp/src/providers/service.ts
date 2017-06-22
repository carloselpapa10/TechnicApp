import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

  constructor(public http: Http) {
  }

  serviceList(host,idUser){
    var url = host+'/ServiceList.php?sUser='+idUser;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  addComment(host,idUser,sId_attention_service,sMessage){
    var url = host+"/AddComment.php?sMessage="+sMessage+"&sIdUser="+idUser+"&sId_attention_service="+sId_attention_service;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
