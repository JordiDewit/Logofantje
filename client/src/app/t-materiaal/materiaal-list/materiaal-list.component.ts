import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { FavorietDataService } from 'src/app/favoriet/favoriet-data.service';
import { User } from 'src/app/favoriet/user.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { MateriaalDataService } from '../materiaal-data.service';
import { Materiaal } from '../materiaal/materiaal.model';

@Component({
  selector: 'app-materiaal-list',
  templateUrl: './materiaal-list.component.html',
  styleUrls: ['./materiaal-list.component.css']
})
export class MateriaalListComponent implements OnInit {

  private _fetchMateriaal$: Observable<Materiaal[]>;
  gebruiker$ : Observable<User>;
  roleAdmin: boolean= null;
  public errorMessage : string = '';
  addedFavo : string = null;
  deleted : string = null;
  display = false;
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

  constructor(private _materiaalDataService : MateriaalDataService, private _favoDataService: FavorietDataService,) {
    this._fetchMateriaal$ = this._materiaalDataService.allMateriaal$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    this.gebruiker$ = this._favoDataService.user$;
  }

  get materiaal$(): Observable<Materiaal[]>{
    return this._fetchMateriaal$;
  }
  checked(){
    return this.filterItems.filter(item => { return item.checked; });
  }
  added(event){
    this.addedFavo = event;
  }
  deleteConfirmed(event){
    this.deleted = event;
  }
  ngOnInit(): void {
    this.gebruiker$.subscribe( res => {
      if(res.role=="admin")
      this.roleAdmin=true;
    });
  }

}
