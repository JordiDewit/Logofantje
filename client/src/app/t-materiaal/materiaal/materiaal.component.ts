import { Component, Input, OnInit } from '@angular/core';
import { MateriaalDataService } from '../materiaal-data.service';
import { Materiaal } from './materiaal.model';
@Component({
  selector: 'app-materiaal',
  templateUrl: './materiaal.component.html',
  styleUrls: ['./materiaal.component.css']
})
export class MateriaalComponent implements OnInit {

  @Input() public mat!: Materiaal;

  constructor(private _materiaalDataService: MateriaalDataService) {}

  ngOnInit(): void {
  }

  deleteMateriaal(){
    this._materiaalDataService.deleteMateriaal(this.mat);
  }
  public createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
}
}
