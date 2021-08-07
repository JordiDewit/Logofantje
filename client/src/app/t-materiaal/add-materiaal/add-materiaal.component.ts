import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Materiaal } from '../materiaal/materiaal.model';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {

  @Output() public newMateriaal = new EventEmitter<Materiaal>();
  public mat: Materiaal;
  message: string;
  matFG: FormGroup;
  public foto: {dbPath: ''};
  public pdf: {dbPath: ''};
  themas = [
    {value: 'zomer', viewValue: 'Zomer'},
    {value: 'herfst', viewValue: 'Herfst'},
    {value: 'lente', viewValue: 'Lente'},
    {value: 'winter', viewValue: 'Winter'},
    {value: 'sinterklaas', viewValue: 'Sinterklaas'},
    {value: 'kerstmis', viewValue: 'Kerstmis'},
    {value: 'halloween', viewValue: 'Halloween'},
    {value: 'valentijn', viewValue: 'Valentijn'},
    {value: 'pasen', viewValue: 'Pasen'}
  ];
  gebieden = [
    {value: 'rekenen', viewValue: 'Rekenen'},
    {value: 'spellen', viewValue: 'Spellen'},
    {value: 'taal', viewValue: 'Taal'},
    {value: 'lezen', viewValue: 'Lezen'},
  ]
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.matFG = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]],
      thema: ['', [Validators.required]],
      leergebied: ['', [Validators.required]]
    });
  }

  submitMateriaal(){
    const mat = new Materiaal(this.matFG.value.naam, new Date(), this.matFG.value.thema, this.matFG.value.leergebied, this.foto.dbPath, this.pdf.dbPath);
    console.log(mat);
    this.newMateriaal.emit(mat);
    this.message="Je hebt nieuw materiaal toegevoegd!";
    return false;
  }

  public uploadFinished = (event)=>{
    this.foto = event;
  }
  public uploadPdfFinished = (event)=>{
    this.pdf = event;
  }
}
