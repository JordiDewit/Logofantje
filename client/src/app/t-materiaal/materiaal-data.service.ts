import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Materiaal} from './materiaal/materiaal.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaalDataService {
  private _reloadMateriaal$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient){}

  //get methode
  get materiaal$(): Observable<Materiaal[]>{
    return this.http.get(`${environment.apiUrl}/Materiaal`)
    .pipe(
      catchError(this.handleError),
      map((list: any[]) : Materiaal[] => list.map(Materiaal.fromJson))
    );
  }
  //de http get methode om een materiaal te krijgen volgens id
  getMateriaalById$(id: string) : Observable<Materiaal>{
    return this.http.get(`${environment.apiUrl}/Materiaal/${id}`)
    .pipe(catchError(this.handleError), map(Materiaal.fromJson));
  }

  get allMateriaal$(){
    return this._reloadMateriaal$.pipe(
      switchMap(() => this.materiaal$)
    );
  }

  //http  post methode om materiaal toe te voegen.
  addMateriaal(materiaal: Materiaal){
    console.log(materiaal);
    return this.http
    .post(`${environment.apiUrl}/Materiaal`, materiaal.toJson())
    .pipe(catchError(this.handleError), map(Materiaal.fromJson))
    .subscribe(() => this._reloadMateriaal$.next(true));
  }

  //http delete methode
  deleteMateriaal(mat: Materiaal){
    return this.http
    .delete(`${environment.apiUrl}/Materiaal/${mat.id}`)
    .pipe(tap(console.log), catchError(this.handleError))
    .subscribe(() => this._reloadMateriaal$.next(true));
  }
  editMateriaal(materiaal: Materiaal){
    console.log(materiaal);
    return this.http
    .put(`${environment.apiUrl}/Materiaal/${materiaal.id}`, materiaal.toJson())
    .pipe(catchError(this.handleError), map(Materiaal.fromJson))
    .subscribe(() => this._reloadMateriaal$.next(true));
    
  }

  //error handeling
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
