import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { ListComponent } from '../items/list/list.component';
import {ChirpsService} from '../services/chirps/chirps.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  chirps: any
  constructor(
    public svc : ChirpsService,
    public dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }


  deleteChirp(){
    this.svc.deleteChirp(this.data.id)
    .subscribe(()=> {
    
    })
  }

}
