import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Materiaal } from '../t-materiaal/materiaal/materiaal.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class FavorietDataService {

  private _reloadGebruiker$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) { }

  get userUpdate$(){
    return this._reloadGebruiker$.pipe(
      switchMap(() => this.user$)
    )
  }
    get user$() : Observable<User>{
      return this.http.get(`/api/User`)
      .pipe(
        catchError(this.handleError),
        map(User.fromJson));
    }

    //addFavorieten
    addFavoriet(materiaal: Materiaal){
      this.http.post(`/api/User/${materiaal.id}`, materiaal.id)
      .pipe(catchError(this.handleError), map(User.fromJson))
      .subscribe(() => this._reloadGebruiker$.next(true));
    }

    deleteFavoriet(mat: Materiaal){
      return this.http.delete(`/api/User/${mat.id}`)
      .pipe(catchError(this.handleError))
      .subscribe(() => this._reloadGebruiker$.next(true));
    }
  handleError(err: any): Observable<never>{
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `Een onbekende fout is ontstaan: ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

