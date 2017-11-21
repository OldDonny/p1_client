import { Component, OnInit, Input } from '@angular/core';
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
  username:any = 'test username';
  message:any = 'test message';

  constructor(
    private svc: ChirpsService,
    public dialog: MatDialog          
  ) { }

  openDialog(chirp): void{
    let dialogRef= this.dialog.open(DialogComponent, 
    {
      height:'220px',
      width:'420px',
      data: {
        name: chirp.name,
        username: chirp.username,
        message: chirp.message
      }
    });
    
  }

  ngOnInit() {

  }

}
