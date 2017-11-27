import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { UsersService } from '../../services/users/users.service';
import { SigninformComponent } from '../signinform/signinform.component';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})

export class SignupformComponent {
  form: FormGroup;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private svc: UsersService,
    public dialog: MatDialog,

  ){
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
}

// For Sign Up Form 
  createNewUser() {
    console.log('ello')
    let newUser = (this.form.value)
    this.svc.createUser(newUser)
      .subscribe(() => {
        this.router.navigate(['/listview'])
      });
  }

// For Sign In Modal
  openDialog() {
    this.dialog.open(SigninformComponent)
  }
}
