import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MateriaalDataService } from "./materiaal-data.service";
import { Materiaal } from "./materiaal/materiaal.model";

@Injectable({
    providedIn: 'root'
})

export class MateriaalResolver implements Resolve<Materiaal> {

    constructor(private materiaalService: MateriaalDataService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Materiaal> {
        return this.materiaalService.getMateriaalById$(route.params['id']);
    }
}