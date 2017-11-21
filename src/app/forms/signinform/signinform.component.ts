import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.scss']
})
export class SigninformComponent  {
  loginForm: FormGroup;
  
 
   constructor(private fb: FormBuilder){
     this.loginForm = this.fb.group({
       
       username: ['', Validators.required],
       password: ['', Validators.required]
       
     });
    
 }

}
