import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiaal } from 'src/app/t-materiaal/materiaal/materiaal.model';
import { FavorietDataService } from '../favoriet-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-favoriet-list',
  templateUrl: './favoriet-list.component.html',
  styleUrls: ['./favoriet-list.component.css']
})
export class FavorietListComponent implements OnInit {


  display2 = false;
  filterItems =  [
    { value: "Algemeen", checked: false},
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


  constructor(private _favoDataService: FavorietDataService) {
   }

  checked(){
    return this.filterItems.filter(item => { return item.checked; });
  }

  ngOnInit(): void {
  }

}
