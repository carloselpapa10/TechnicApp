import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Product {

    host : any;
    
  constructor(public http: Http) {  
  }
  
  productList(idCategory, host){  
  
    var url = host+'/ProductList.php?sId_category='+idCategory;
    console.log(url);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
