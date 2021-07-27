import { Injectable } from '@angular/core';
import { MATERIAAL } from './mock-materiaal';

@Injectable({
  providedIn: 'root'
})
export class MateriaalDataService {

  private _materiaal = MATERIAAL;
  constructor() { }

  get materiaal() {
    return this._materiaal;
  }
}
