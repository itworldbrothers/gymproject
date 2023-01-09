import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;

 registerForm! : FormGroup;

  constructor( private fb : FormBuilder) {
   this.registerForm = this.fb.group({
   name: ['',Validators.required],
   email: ['',Validators.required],
   mobile: ['',Validators.required],
   password: ['',Validators.required],
   cpassword: ['',Validators.required],

   })
  }

  
  ngOnInit(): void {
    
  }

  registerdata(){
  
   
  }
  
}
