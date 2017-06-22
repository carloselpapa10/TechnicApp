import { FormControl } from '@angular/forms';
 
export class UsernameValidator {
 
  static checkUsername(control: FormControl): any {
 
    console.log(control.value.toLowerCase());
    return null;
  }
 
}