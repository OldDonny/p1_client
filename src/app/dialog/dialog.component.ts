import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { ListComponent } from '../items/list/list.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
