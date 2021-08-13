import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class FavorietDataService {

  constructor(private http: HttpClient) { }

  /*get user$() : Observable<User> {
      return this.http.get<User>(`api/user`).pipe(
      catchError(this.handleError),
      map((val) => val.map(User.fromJson))
    )
  }*/
  handleError(err: any): Observable<never>{
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = `Een onbekende fout is ontstaan ${err}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}