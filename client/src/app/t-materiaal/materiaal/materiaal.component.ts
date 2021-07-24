import { Component, Input, OnInit } from '@angular/core';
import { Materiaal } from './materiaal.model';

@Component({
  selector: 'app-materiaal',
  templateUrl: './materiaal.component.html',
  styleUrls: ['./materiaal.component.css']
})
export class MateriaalComponent implements OnInit {

  @Input() public mat!: Materiaal;

  constructor() { }

  ngOnInit(): void {
  }

}
