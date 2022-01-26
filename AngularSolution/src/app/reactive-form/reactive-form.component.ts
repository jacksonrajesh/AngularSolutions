import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor() {   
  //   this.signupForm=new FormGroup ({
  //   'username' : new FormControl(null),
  //   'email' : new FormControl(null),
  //   'gender' : new FormControl('male')
  // })
}
  genders =['male', 'female'];
  signupForm : FormGroup  ;
  ngOnInit(): void {
    this.signupForm=new FormGroup ({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male')
    })
  } 

  submit() :void {
   console.log(this.signupForm.value);
  }

}
