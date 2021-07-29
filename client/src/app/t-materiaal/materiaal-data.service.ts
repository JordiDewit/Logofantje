import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materiaal} from './materiaal/materiaal.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaalDataService {

  constructor(private http: HttpClient) {}

  get materiaal$(): Observable<Materiaal[]>{
    return this.http
    .get(`/api/Materiaal`)
    .pipe(map((list: any[]) => list.map(Materiaal.fromJson)));
  }
}
