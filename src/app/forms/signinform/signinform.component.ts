import { Component, OnInit, Inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router} from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { LoginService } from '../../services/login/login.service';



@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.scss']
})
export class SigninformComponent  {
  loginForm: FormGroup;
  
 
   constructor(@Inject(MAT_DIALOG_DATA) private data: any, 
   public dialogRef: MatDialogRef<SigninformComponent>,
                private fb: FormBuilder,
                private loginsvc: LoginService,
                private router: Router){

     this.loginForm = this.fb.group({
       
       username: ['', Validators.required],
       password: ['', Validators.required]
       
     });
    
 }
 onNoClick(): void {
  this.dialogRef.close();
}

 login(username:string, password:string): void{
    let signin={ username, password}
    if(this.loginForm.valid){
      this.router.navigate(['/listview'])
      this.loginsvc.login(signin)
        .subscribe(() =>{
    
         })
    }
 
}

 

}
