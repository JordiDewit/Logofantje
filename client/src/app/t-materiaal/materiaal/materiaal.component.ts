import { Component, Input, OnInit } from '@angular/core';
import { Materiaal } from './materiaal.model';
declare var require : any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-materiaal',
  templateUrl: './materiaal.component.html',
  styleUrls: ['./materiaal.component.css']
})
export class MateriaalComponent implements OnInit {

  @Input() public mat!: Materiaal;

  constructor() { }

  /*downloadPdf(pdfUrl: string){
   FileSaver.saveAs(pdfUrl, null);
  }*/

  ngOnInit(): void {
  }

  downloadPdf(base64String, fileName) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }
  /*onClickDownloadPdf(){
    let base64String = "your-base64-string";
    this.downloadPdf(base64String,"sample");
  }*/

}
