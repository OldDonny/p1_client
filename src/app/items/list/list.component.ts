import { Component, OnInit } from '@angular/core';
import { ChirpsService } from '../../services/chirps/chirps.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  chirps: any;
  username: string;
  message: string;

  constructor(
    private svc: ChirpsService,
    public dialog: MatDialog          
  ) { }

  openDialog(): void{
    let dialogRef= this.dialog.open(DialogComponent, 
    {
      width:'10px',
      data: {
        message: this.message,
        username: this.username
      }
    });
    
  }
  
  ngOnInit() {
    this.svc.getChirps()
      .subscribe((res) => this.chirps = res)
  }

}
