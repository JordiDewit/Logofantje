import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriaalDataService } from '../materiaal-data.service';
import { Materiaal } from '../materiaal/materiaal.model';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-materiaal-edit',
  templateUrl: './materiaal-edit.component.html',
  styleUrls: ['./materiaal-edit.component.css']
})
export class MateriaalEditComponent implements OnInit {
  public mat: Materiaal;
  matFG: FormGroup;
  newFoto : string;
  newPdf : string;
  message: string;

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
  ];

  constructor(
    private route: ActivatedRoute, 
    private materiaalDataService: MateriaalDataService, 
    private _location: Location,
    private fb: FormBuilder) { }

    ngOnInit(): void {

      this.route.data.subscribe(item => 
        this.mat = item['mat']);

      this.matFG = this.fb.group({
        naam: [ this.mat.naam , [Validators.minLength(3)]],
        thema: [this.mat.thema],
        leergebied: [this.mat.leergebied]
      });

      this.newFoto = this.mat.foto;
      this.newPdf = this.mat.pdf;
    }

    //edit methode
    editMateriaal(){
      if(this.matFG.value.naam != this.mat.naam)
        this.mat.setNaam(this.matFG.value.naam);
      
      if(this.matFG.value.thema != this.mat.thema)
        this.mat.setThema(this.matFG.value.thema);

      if(this.matFG.value.leergebied != this.mat.leergebied)
      this.mat.setLeergebied(this.matFG.value.leergebied);

      if(this.newFoto != this.mat.foto)
      this.mat.setFoto(this.newFoto);

      if(this.newPdf != this.mat.pdf)
      this.mat.setPdf(this.newPdf);

      console.log(this.mat.naam, this.mat.aangemaakt, this.mat.thema, this.mat.leergebied, this.mat.foto, this.mat.leergebied);

      //this.materiaalDataService.editMateriaal(this.mat);
      this.message = `Je hebt ${this.mat.naam} gewijzigd`;
      return false;
    }
  public uploadFinished = (event)=>{
    this.newFoto = event;
  }
  public uploadPdfFinished = (event)=>{
    this.newPdf = event;
  }
  public createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
  }
  public backClicked(){
    this._location.back();
  }

}
