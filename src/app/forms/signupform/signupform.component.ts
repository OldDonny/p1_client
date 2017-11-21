import { Component, OnInit, } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent {
 Form: FormGroup;
 

  constructor(private fb: FormBuilder){
    this.Form = this.fb.group({
      firstnamelastname: [' ', Validators.required],
      username: [' ', Validators.required],
      password: [' ', Validators.required],
      email: [' ', Validators.required]
    });
   
}
  
}
