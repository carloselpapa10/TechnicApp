import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Transfer, TransferObject } from '@ionic-native/transfer';


@Injectable()
export class SettingProvider {

  constructor(public http: Http, private transfer: Transfer) {

  }

  categoryList(host) {
    var url = host + '/CategoryList.php';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  changeCategory(idCategory, host, sId_user) {
    var url = host + '/ChangeCategory.php?sId_user=' + sId_user + '&sIdCategory=' + idCategory;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  changePassword(id, password1, password2, host) {
    var url = host + '/ChangePassword.php?sId=' + id + '&sPassword1=' + password1 + '&sPassword2=' + password2;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }


  changePhoto(id, sImage, host){
    var url = host+'/ChangePhoto.php?sId=' + id + '&sImage='+sImage;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  upload = (image: string, filename: string, host: string): any => {
    const fileTransfer: TransferObject = this.transfer.create();

    let options = {
      fileKey: 'file',
      fileName: filename,
      mimeType: 'image/jpeg',
      chunkedMode: false,
      headers: {
        'Content-Type': undefined
      },
      params: {
        fileName: filename
      }
    };

    fileTransfer.upload(image,  host + "/uploadPhoto.php", options, false)
      .then((result: any) => {
        console.log(result);
      }).catch((error: any) => {
        console.log("this err "+error);
      });

      
  }
}
