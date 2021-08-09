export interface MateriaalJson{
    id: number;
    naam: string;
    aangemaakt: string;
    thema: string;
    leergebied: string;
    foto: string;
    pdf: string;
}
export class Materiaal {
    private _id: number;
    constructor(
        private _naam: string, 
        private _aangemaakt = new Date(),
        private _thema: string,
        private _leergebied: string,
        private _foto : string,
        private _pdf : string
         ){}
        get id(): number{
            return this._id;
        }
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
        get pdf(){
            return this._pdf;
        }
        setAangemaakt(aangemaakt: Date){
            this._aangemaakt = aangemaakt;
        }
        setNaam(naam: string){
            this._naam = naam;
        }
        setThema(thema: string){
            this._thema = thema;
        }
        setLeergebied(gebied: string){
            this._leergebied = gebied;
        }
        setFoto(foto: string){
            this._foto = foto;
        }
        setPdf(pdf: string){
            this._pdf=pdf;
        }
        static fromJson(json: MateriaalJson) : Materiaal {
            const mat = new Materiaal(json.naam, new Date(json.aangemaakt) , json.thema, json.leergebied, json.foto, json.pdf);
            mat._id = json.id;
            return mat;
        }
        toJson() : MateriaalJson{
            return <MateriaalJson>{
                id: this.id,
                naam : this.naam,
                aangemaakt : this.aangemaakt.toISOString(),
                thema: this.thema,
                leergebied: this.leergebied,
                foto: this.foto,
                pdf: this.pdf
            };  
        }
          public onClickDownloadPdf(){
            const source = `https://localhost:5001/${this._pdf}`;
            console.log(source);
            const link = document.createElement("a");
            link.href = source;
            window.open(source);
            link.download = `${this._naam}.pdf`;
          }
          
}