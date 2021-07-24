import { Component, OnInit } from '@angular/core';
import { MATERIAAL } from '../mock-materiaal';

@Component({
  selector: 'app-materiaal-list',
  templateUrl: './materiaal-list.component.html',
  styleUrls: ['./materiaal-list.component.css']
})
export class MateriaalListComponent implements OnInit {

  private _materiaal = MATERIAAL;

  constructor() { }

  get materiaal() {
    return this._materiaal;
  }
  ngOnInit(): void {
  }

}
