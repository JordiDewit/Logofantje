import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MateriaalDataService } from '../materiaal-data.service';
import { Materiaal } from '../materiaal/materiaal.model';

@Component({
  selector: 'app-materiaal-list',
  templateUrl: './materiaal-list.component.html',
  styleUrls: ['./materiaal-list.component.css']
})
export class MateriaalListComponent implements OnInit {

  private _fetchMateriaal$ = this._materiaalDataService.materiaal$;

  filterItems =  [
    { value: "Zomer", checked : false },
    { value: "Herfst" , checked : false },
    { value: "Lente", checked : false},
    { value: "Winter", checked : false },
    { value: "Pasen", checked: false },
    { value: "Sinterklaas", checked: false},
    { value: "Kerstmis", checked : false },
    { value: "Halloween", checked : false},
    { value: "Valentijn", checked : false}
  ];

  constructor(private _materiaalDataService : MateriaalDataService) {}
  

  get materiaal$(): Observable<Materiaal[]>{
    return this._fetchMateriaal$;
  }

  checked(){
    return this.filterItems.filter(item => { return item.checked; });
  }
  ngOnInit(): void {
  }

}
