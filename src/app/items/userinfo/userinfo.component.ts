import { Component, OnInit, Input } from '@angular/core';
import { ChirpsService } from '../../services/chirps/chirps.service';
import { UsersService } from '../../services/users/users.service';
import { SubsService } from '../../services/subs/subs.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
