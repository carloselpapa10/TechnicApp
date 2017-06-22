import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { Transfer, TransferObject } from '@ionic-native/transfer';
      
@Injectable()
export class Generate {

  host : any;
  user : any;
  
  constructor(public http: Http, public storage: Storage, private transfer: Transfer) {
    storage.ready().then(() => {
       storage.get('hostserver').then((val) => {
            this.host = val;
       }),
       storage.get('user').then((val) => {
            this.user = val;
       })
     });
  }
  
  generateService(sPayment_method, sService, sImage, sLocation, sId_product){
    
    console.log("sPayment_method => "+sPayment_method+ " sService=> "+sService+" sImage=> "+sImage+" sLocation=>"+sLocation+" sId_product=>"+sId_product);
    
    var url = this.host+'/GenerateService.php?sPayment_method='+sPayment_method+'&sService='+sService+'&sImage='+sImage+'&sLocation='+sLocation+'&sId_user='+this.user.id+'&sId_product='+sId_product;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  upload = (image: string, filename: string) : void => { 
        const fileTransfer: TransferObject = this.transfer.create();
        
        let options = {
            fileKey: 'file',
            fileName: filename,
            mimeType: 'image/jpeg',
            chunkedMode: false,
            headers: {
                'Content-Type' : undefined
            },
            params: {
                fileName: filename
            }
        }; 
        fileTransfer.upload(image, this.host+"/upload.php", options, false)
        .then((result: any) => {
            console.log(result);
        }).catch((error: any) => {
            console.log(error);
        }); 
    }

}