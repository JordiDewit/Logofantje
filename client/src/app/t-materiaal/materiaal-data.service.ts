import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Materiaal} from './materiaal/materiaal.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaalDataService {
  private _materiaal: Materiaal[];
  private _materiaal$ = new BehaviorSubject<Materiaal[]>([]);

  constructor(private http: HttpClient) {
    this.materiaal$.subscribe((mat: Materiaal[])=> {
      this._materiaal = mat;
      this._materiaal$.next(this._materiaal);
    })
  }

  get allMateriaal$(): Observable<Materiaal[]>{
    return this._materiaal$;
  }

  //de http get methode om materiaal op te vragen
  get materiaal$(): Observable<Materiaal[]>{
    return this.http
    .get(`/api/Materiaal`)
    .pipe(
      catchError(this.handleError),
      map((list: any[]) => list.map(Materiaal.fromJson)));
  }

  //http  post methode om materiaal toe te voegen.
  addMateriaal(materiaal:Materiaal){
    return this.http.post(`/api/Materiaal`, materiaal.toJson())
    .pipe(map(Materiaal.fromJson))
    .subscribe((mat: Materiaal) => {
      this._materiaal = [...this._materiaal, mat];
      this._materiaal$.next(this._materiaal);
    });
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
