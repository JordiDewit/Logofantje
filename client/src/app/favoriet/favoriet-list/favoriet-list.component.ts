import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

   materiaal : Materiaal[];
   naam : string;
   achternaam : string;
   gebruiker$ : Observable<User>;
   emptyMessage : string = null;
   deletedMessage: string = null;
  constructor(private _favoDataService: FavorietDataService) {
   this.gebruiker$ = this._favoDataService.userUpdate$;
   }

    get user$(): Observable<User>{
      return this.gebruiker$;
    }

    get favomat() : Materiaal[]{
      if(this.materiaal.length == 0)
      this.emptyMessage = "Je hebt nog geen favorieten..";
      return this.materiaal;
    }
    deleted(event){
      this.deletedMessage = event;
    }

    checked(){
      return this.filterItems.filter(item => { return item.checked; });
    }

  ngOnInit(): void {
    this.user$.subscribe( res => {
      this.materiaal = res.materiaal;
      this.naam = res.name;
      this.achternaam = res.lastname;
    });
  }

}
