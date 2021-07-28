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

  downloadPdf(pdfUrl: string, pdfName: string){
   FileSaver.saveAs(pdfUrl, pdfName);
  }

  ngOnInit(): void {
  }

}
