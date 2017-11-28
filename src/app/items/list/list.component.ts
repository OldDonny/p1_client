import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChirpsService } from '../../services/chirps/chirps.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input()
  chirps: any;
  username: any = 'test username';
  message: any = 'test message';

  constructor(
    private svc: ChirpsService,
    public dialog: MatDialog,
    private router: Router          
  ) { }

  openDialog(chirp): void{
    let dialogRef= this.dialog.open(DialogComponent, 
    {
      width:'40em',
      data: {
        id: chirp.id,
        name: chirp.name,
        username: chirp.username,
        message: chirp.message
      }

    });
    
  }

 

  ngOnInit() {

  }

}
