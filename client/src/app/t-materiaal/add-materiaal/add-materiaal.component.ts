import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { MateriaalDataService } from '../materiaal-data.service';
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
  errorMessage: string;
  matFG: FormGroup;
  public foto: {dbPath: ''};
  public pdf: {dbPath: ''};
  themas = [
    {value: 'algemeen', viewValue: 'Algemeen'},
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
    {value: 'algemeen', viewValue: 'Algemeen'},
    {value: 'rekenen', viewValue: 'Rekenen'},
    {value: 'spellen', viewValue: 'Spellen'},
    {value: 'taal', viewValue: 'Taal'},
    {value: 'lezen', viewValue: 'Lezen'},
  ]
  constructor(private fb: FormBuilder, private _materiaalDataService: MateriaalDataService) {}

  ngOnInit(): void {
    this.matFG = this.fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]],
      thema: ['', [Validators.required]],
      leergebied: ['', [Validators.required]]
    });
  }

  submitMateriaal(){
    /*if(this.foto.dbPath='' || this.pdf.dbPath=''){
      this.errorMessage = "Je moet altijd een afbeelding en pdf toevoegen!";
    }else{*/
      this.message = null;
      this.errorMessage = null;
      try{
      this._materiaalDataService.addMateriaal(new Materiaal(this.matFG.value.naam, new Date(), this.matFG.value.thema, this.matFG.value.leergebied, this.foto.dbPath, this.pdf.dbPath));
      this.message="Je hebt nieuw materiaal toegevoegd!";
      for(var name in this.matFG.controls){
        this.matFG.controls[name].setValue('');
        this.matFG.controls[name].setErrors(null);
      }
      this.refresh();
      }catch(e){
        this.errorMessage = "Je moet altijd een afbeelding en pdf toevoegen!";
      }
    //}

  }

  public uploadFinished = (event)=>{
    this.foto = event;
  }
  public uploadPdfFinished = (event)=>{
    this.pdf = event;
  }

  async refresh(){
   await new Promise(f => setTimeout(f, 1000));
    window.location.reload();
  }
}
