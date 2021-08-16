import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FavorietDataService } from 'src/app/favoriet/favoriet-data.service';
import { User } from 'src/app/favoriet/user.model';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { MateriaalDataService } from '../materiaal-data.service';
import { Materiaal } from './materiaal.model';
@Component({
  selector: 'app-materiaal',
  templateUrl: './materiaal.component.html',
  styleUrls: ['./materiaal.component.css']
})
export class MateriaalComponent implements OnInit {

  @Input() public mat!: Materiaal;
  loggedInUser$ = this._authenticationService.user$;
  gebruiker$ : Observable<User>;
  roleAdmin: boolean= null;
  favoMessage : string = null;
  @Output() public added = new EventEmitter();
  
  constructor(private _materiaalDataService: MateriaalDataService, 
    private _favoDataService: FavorietDataService,
    private _authenticationService: AuthenticationService,) {
      this.gebruiker$ = this._favoDataService.user$;
    }

  ngOnInit(): void {
    this.gebruiker$.subscribe( res => {
      if(res.role=="admin")
      this.roleAdmin=true;
    });
  }

  addFavoriet(){
    this._favoDataService.addFavoriet(this.mat);
    this.favoMessage = `Je hebt ${this.mat.naam} toegevoegd aan je favorieten!`;
    this.added.emit(this.favoMessage);
  }

  deleteMateriaal(){
    this._materiaalDataService.deleteMateriaal(this.mat);
  }
  public createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
}
}
