import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { Comment } from '../../providers/comment';
import { AlertController } from 'ionic-angular';

import { DictionaryService } from '../../modules/dictionary/providers/dictionary.service';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {

  host: any;
  user: any;
  comments: any;
  validateCommentList: any;
  tDictionary: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private comment: Comment, public storage: Storage,
    public alertCtrl: AlertController, public sDictionary: DictionaryService) {
    storage.ready().then(() => {
      storage.get('hostserver').then((val) => {
        this.host = val;
      }),
        storage.get('user').then((val) => {
          this.user = val;
          console.log(val);

          this.comment.commentList(this.user.id_category).subscribe(
            data => {
              this.comments = data;
              this.validateCommentList = data[0].error;
              console.log(data);
            },
            err => {
              console.log(err);
            }
          );
        })
    });
    this.tDictionary = sDictionary;
    console.log(sDictionary);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }

  ionViewWillEnter() {
    if (this.host != null && this.user != null) {
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
          this.user = val;

          this.comment.commentList(this.user.id_category).subscribe(
            data => {
              this.comments = data;
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

  deleteItem(comment) {
    console.log(comment);
    this.comment.deleteComment(comment.id, this.user.id).subscribe(
      data => {
        console.log(data);
        if (data == "0") {
          this.ionViewWillEnter();
          let alert = this.alertCtrl.create({
            title: this.tDictionary.get("MESSAGE"),
            subTitle: this.tDictionary.get("YES_MESSAGE"),
            buttons: [this.tDictionary.get("OKC")]
          });
          alert.present();
        } else {
          let alert = this.alertCtrl.create({
            title: this.tDictionary.get("MESSAGE"),
            subTitle: this.tDictionary.get("NO_MESSAGE"),
            buttons: [this.tDictionary.get("OKC")]
          });
          alert.present();
        }
      }
      , err => { console.log(err) }
    );
  }

}
