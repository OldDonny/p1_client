import { Component, OnInit, Inject } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.scss']
})
export class SigninformComponent  {
  loginForm: FormGroup;
  
 
   constructor(@Inject(MAT_DIALOG_DATA) private data: any, 
                private fb: FormBuilder){

     this.loginForm = this.fb.group({
       
       username: ['', Validators.required],
       password: ['', Validators.required]
       
     });
    
 }

}
