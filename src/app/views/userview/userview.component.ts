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
  users: Array<any>
  constructor(protected svc: UsersService,
              protected csvc: ChirpsService,
              protected ssvc: SubsService) { }

  ngOnInit() {
    this.svc.getUsers()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      });
  }



}
