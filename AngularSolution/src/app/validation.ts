import { ɵAnimationGroupPlayer } from "@angular/animations";
import { AbstractControl, FormControl } from "@angular/forms";
import { firstValueFrom } from "rxjs";

export class Validation {
     emailValidate(control : FormControl) : {[s:string]:boolean} {
      // var checkEmail= control.value.match(" /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/");
       
      if( control.value != undefined && control.value.toString().indexOf("@angular.com") > -1){
           return {'works':true};
        }
        else{
           return {'didnt work':false};
        }

        }
    }

