import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent {
 form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private svc: UsersService
  ){
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
}

    createNewUser() {
      let newUser = (this.form.value)
      this.svc.createUser(newUser)
        .subscribe(() => {
          this.router.navigate(['/listview'])
        });
    }

    


}
