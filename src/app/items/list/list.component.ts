import { Component, OnInit } from '@angular/core';
import { ChirpsService } from '../../services/chirps/chirps.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  chirps: any;

  constructor(private svc: ChirpsService) { }

  ngOnInit() {
    this.svc.getChirps()
      .subscribe((res) => this.chirps = res)
  }

}
