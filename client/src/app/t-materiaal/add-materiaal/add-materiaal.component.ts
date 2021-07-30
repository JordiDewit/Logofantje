import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Materiaal } from '../materiaal/materiaal.model';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {

  @Output() public newMat = new EventEmitter<Materiaal>();

  constructor() { }

  ngOnInit(): void {
  }

  addMateriaal(matNaam: HTMLInputElement) : boolean {
    const materiaal = new Materiaal(matNaam.value, null, null, null, null, null);
    this.newMat.emit(materiaal);
    return false;
  }

}
