import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

@Injectable()
export class Comment {

  host : any;

  constructor(public http: Http, public storage: Storage) {
    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
            this.host = val;
       })
     });
  }

  commentList(id_category){
    var url = this.host+'/CommentList.php?sId_category='+id_category;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  deleteComment(sIdComment,sId_user){
    var url = this.host+'/DeleteComment.php?sIdComment='+sIdComment+'&sId_user='+sId_user;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
