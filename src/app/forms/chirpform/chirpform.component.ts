import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-chirpform',
  templateUrl: './chirpform.component.html',
  styleUrls: ['./chirpform.component.scss']
})
export class ChirpformComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private svc: UsersService
  ) { 
    this.form = this.fb.group({
      chirp: ['', Validators.required] ,
    })
  }

  ngOnInit() {
  }

}
