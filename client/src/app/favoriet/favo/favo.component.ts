import { Component, Input, OnInit } from '@angular/core';
import { Materiaal } from 'src/app/t-materiaal/materiaal/materiaal.model';
import { FavorietDataService } from '../favoriet-data.service';

@Component({
  selector: 'app-favo',
  templateUrl: './favo.component.html',
  styleUrls: ['./favo.component.css']
})
export class FavoComponent implements OnInit {

  @Input() public mat!: Materiaal;
  
  constructor(private _favoDataService: FavorietDataService) { }

  ngOnInit(): void {
  }

  public createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
}
}
