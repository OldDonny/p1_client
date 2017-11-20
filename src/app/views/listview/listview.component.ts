import { Component, OnInit } from '@angular/core';
import { ChirpsService } from '../../services/chirps/chirps.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  chirps: Array<any>;

  constructor(protected svc: ChirpsService) { }

  ngOnInit() {
    this.svc.getChirps()
      .subscribe((res) => {
        console.log(res);
        this.chirps = res;
      });
  }

}
