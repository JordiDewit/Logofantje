export interface MateriaalJson{
    naam: string;
    datum: string;
    thema: string;
    leergebied: string;
    foto: string;
    pdfLink: string;
}
export class Materiaal {
    constructor(
        private _naam: string, 
        private _datum = new Date(),
        private _thema: string,
        private _leergebied: string,
        private _foto : string,
        private _pdfLink : string ){}

        get naam() : string {
            return this._naam;
        }
        get datum() : Date {
            return this._datum;
        }
        get thema(){
            return this._thema;
        }
        get leergebied(){
            return this._leergebied;
        }
        get foto() : string {
            return this._foto;
        }
        get pdfLink() : string {
            return this._pdfLink;
        }

        static fromJson(json: MateriaalJson) : Materiaal {
            const mat = new Materiaal(json.naam, new Date(json.datum), json.thema, json.leergebied, json.foto, json.pdfLink);
            return mat;
        }
}