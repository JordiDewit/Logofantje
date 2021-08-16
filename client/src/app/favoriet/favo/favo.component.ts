import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Materiaal } from 'src/app/t-materiaal/materiaal/materiaal.model';
import { FavorietDataService } from '../favoriet-data.service';

@Component({
  selector: 'app-favo',
  templateUrl: './favo.component.html',
  styleUrls: ['./favo.component.css']
})
export class FavoComponent implements OnInit {

  @Input() public mat!: Materiaal;
  @Output() public deleted = new EventEmitter();
  confirmMessage : string = null;
  
  constructor(private _favoDataService: FavorietDataService) { }

  ngOnInit(): void {
  }
  deleteFavoriet(){
    this._favoDataService.deleteFavoriet(this.mat);
    this.confirmMessage = `Je hebt ${this.mat.naam} verwijdert`;
    this.deleted.emit(this.confirmMessage);
  }

  public createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
}
}
