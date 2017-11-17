import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'

import { IChirps } from '../../chirpinterface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  chirps: Array<IChirps>;

  constructor() { }

  ngOnInit() {
  }

}
