import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { ChirpsService } from '../../services/chirps/chirps.service';
import { SubsService } from '../../services/subs/subs.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {
  users: any;
  constructor(private svc: UsersService,
              private csvc: ChirpsService,
              private ssvc: SubsService) { }

  ngOnInit() {
    this.svc.getUsers()
      .subscribe((res) => {
        this.users = res;
      });
  }
  
  getFollowingUsers(id){
    this.ssvc.getFollowingUsers(id)
    .subscribe((res) => {
      this.users = res;
    })
  }

}
