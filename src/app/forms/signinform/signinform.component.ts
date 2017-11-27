import { Component, OnInit, Inject } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { LoginService } from '../../services/login/login.service';



@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.scss']
})
export class SigninformComponent  {
  loginForm: FormGroup;
  
 
   constructor(@Inject(MAT_DIALOG_DATA) private data: any, 
                private fb: FormBuilder,
                private loginsvc: LoginService){

     this.loginForm = this.fb.group({
       
       username: ['', Validators.required],
       password: ['', Validators.required]
       
     });
    
 }

 login(username:string, password:string): void  {
   let thislogin={ username, password}
 if(this.loginForm.valid){
   console.log(thislogin)
   this.loginsvc.login(thislogin)
   .subscribe(Responce =>{
     
   })
 }
}

 

}
