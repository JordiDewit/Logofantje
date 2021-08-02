import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Materiaal } from '../materiaal/materiaal.model';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {

  @Output() public newMateriaal = new EventEmitter<Materiaal>();
  public mat: Materiaal;
  matFG: FormGroup;
  public foto: {dbPath: ''};
  constructor() {}

  ngOnInit(): void {
    this.matFG = new FormGroup({
      naam: new FormControl(),
      thema: new FormControl(),
      leergebied: new FormControl()
    });
  }

  submitMateriaal(){
    const mat = new Materiaal(this.matFG.value.naam, new Date(), this.matFG.value.thema, this.matFG.value.leergebied, this.foto.dbPath);
    this.newMateriaal.emit(mat);
    return false;
  }

  public uploadFinished = (event)=>{
    this.foto = event;
  }
}
