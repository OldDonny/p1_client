import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { Router, RouterModule } from '@angular/router';
import { ChirpsService } from '../../services/chirps/chirps.service';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-chirpform',
  templateUrl: './chirpform.component.html',
  styleUrls: ['./chirpform.component.scss']
})
export class ChirpformComponent implements OnInit {
  user:any
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private Usersvc: UsersService,
    private Chirpsvc: ChirpsService,
    private loginsvc: LoginService
  ) { 
    this.form = this.fb.group({
      chirp: ['', Validators.maxLength(240)]
    })
  }

  newChirp(chirp:string){
    let thischirp={username:'example', message: chirp}
    if(this.form.valid){
      console.log(chirp)
      this.Chirpsvc.createChirp(thischirp)
      .subscribe(Responce =>{
        this.router.navigate(['/listview'])
      })
    }
  }


  ngOnInit() {
    this.loginsvc.me()
    .then((user) => {
      this.user = user
    });
  }

}
