export interface MateriaalJson{
    naam: string;
    aangemaakt: string;
    thema: string;
    leergebied: string;
    foto: string;
    pdf: string;
}
export class Materiaal {
    constructor(
        private _naam: string, 
        private _aangemaakt : string,
        private _thema: string,
        private _leergebied: string,
        private _foto : string,
        private _pdf : string ){}

        get naam() : string {
            return this._naam;
        }
        get aangemaakt() : Date {
            return new Date(this._aangemaakt);
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
        get pdf() : string {
            return this._pdf;
        }
        get testDatum() : Date {
            return new  Date("2021-07-29T00:00:00");
        }
        static fromJson(json: MateriaalJson) : Materiaal {
            const mat = new Materiaal(json.naam, json.aangemaakt , json.thema, json.leergebied, json.foto, json.pdf);
            return mat;
        }
        toJson() : MateriaalJson{
            return {
                naam : this.naam,
                aangemaakt : this.aangemaakt.toDateString(),
                thema: this.thema,
                leergebied: this.leergebied,
                foto : this.foto,
                pdf: this.pdf
            };
        }
  
          downloadPdf(){
              const source = this._pdf;
              console.log(source);
              const link = document.createElement("a");
              link.href = source;
              link.download = `${this._naam}.pdf`;
              link.click();
          }
          public onClickDownloadPdf(){
              this.downloadPdf();
          }
          public test() {
              console.log(this._pdf);
          }
}