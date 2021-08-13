import { Materiaal, MateriaalJson } from "../t-materiaal/materiaal/materiaal.model";
export interface UserJson{
    name: string;
    lastname: string;
    email: string;
    functie: string;
    materiaal: MateriaalJson[];
}
export class User{

    constructor(
        private _name: string,
        private _lastname: string,
        private _email: string,
        private _functie: string,
        private _materiaal = new Array<Materiaal>()
    ){}

    get name(): string{
        return this._name;
    }
    get lastname(): string{
        return this._lastname;
    }
    get email(): string{
        return this._email;
    }
    get functie(): string{
        return this._functie;
    }
    get materiaal(): Materiaal[]{
        return this._materiaal;
    }
    static fromJson(json: UserJson) : User {

        const user = new User(json.name , json.lastname, json.email, json.functie, json.materiaal.map(Materiaal.fromJson));
        return user;
    }
    toJson() : UserJson{
        return <UserJson>{
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            functie: this.functie,
            materiaal: this.materiaal.map(mat => mat.toJson())
        };  
    }
}