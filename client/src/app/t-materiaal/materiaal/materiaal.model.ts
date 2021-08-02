export interface MateriaalJson{
    naam: string;
    aangemaakt: string;
    thema: string;
    leergebied: string;
    foto: string;
}
export class Materiaal {
    constructor(
        private _naam: string, 
        private _aangemaakt = new Date(),
        private _thema: string,
        private _leergebied: string,
        private _foto : string
         ){}

        get naam() : string {
            return this._naam;
        }
        get aangemaakt() : Date {
            return this._aangemaakt;
        }
        get thema(){
            return this._thema;
        }
        get leergebied(){
            return this._leergebied;
        }
        get foto(){
            return this._foto;
        }
        static fromJson(json: MateriaalJson) : Materiaal {
            const mat = new Materiaal(json.naam, new Date(json.aangemaakt) , json.thema, json.leergebied, json.foto);
            return mat;
        }
        toJson() : MateriaalJson{
            return {
                naam : this.naam,
                aangemaakt : this.aangemaakt.toDateString(),
                thema: this.thema,
                leergebied: this.leergebied,
                foto: this.foto
            };
        }
          /*downloadPdf(){
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
          }*/
}