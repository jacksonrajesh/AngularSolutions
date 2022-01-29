import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Validation} from '../validation'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor( ) {}
  validate=new Validation();
  genders =['male', 'female'];
  signupForm : FormGroup;
  ngOnInit(): void {
  
    this.signupForm=new FormGroup ({
      'username' : new FormControl(null,[Validators.required]),
      'email' : new FormControl(null, [Validators.required,Validators.email,this.validate.emailValidate]),
      'gender' : new FormControl('male',[Validators.required])
    })
  } 

  submit() :void {
    if (this.signupForm.valid) 
    {
     if(this.signupForm.get('username')?.valid){
       console.log('worked');
     }
     console.log(this.signupForm.value);
    }
   
  }

}
