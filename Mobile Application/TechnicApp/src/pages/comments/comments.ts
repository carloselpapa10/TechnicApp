import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Comment } from '../../providers/comment';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {

  host : any;
  user : any;
  comments : any;
  validateCommentList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private comment: Comment, public storage: Storage,
              public alertCtrl: AlertController ) {
    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
            this.host = val;
       }),
       storage.get('user').then((val) => {
            this.user = val;

            this.comment.commentList(this.user.id_category).subscribe(
                data => {
                   this.comments =data;
                   this.validateCommentList = data[0].error;
                   console.log(data);
                },
                err => {
                    console.log(err);
                }
            );
       })
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }

  ionViewWillEnter(){
    if(this.host!=null && this.user != null){
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
              this.user = val;

              this.comment.commentList(this.user.id_category).subscribe(
                  data => {
                    this.comments =data;
                    this.validateCommentList = data[0].error;
                    console.log(data);
                  },
                  err => {
                      console.log(err);
                  }
              );
        })
      });
    }
  }

  deleteItem(comment){
    console.log(comment);
    this.comment.deleteComment(comment.id,this.user.id).subscribe(
      data => {
        console.log(data);
        if(data=="0"){
            this.ionViewWillEnter();
            let alert = this.alertCtrl.create({
                        title: 'Message!',
                        subTitle: 'The message has been removed!',
                        buttons: ['OK']
                      });  
                      alert.present();                      
        }else{
            let alert = this.alertCtrl.create({
                        title: 'Message!',
                        subTitle: 'Ocurr an error on the server!',
                        buttons: ['OK']
                      }); 
                      alert.present();
        }
      }
      ,err =>{console.log(err)}
    );    
  }

}
