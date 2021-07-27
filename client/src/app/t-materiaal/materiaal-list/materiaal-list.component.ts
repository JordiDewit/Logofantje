import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MateriaalDataService } from '../materiaal-data.service';

@Component({
  selector: 'app-materiaal-list',
  templateUrl: './materiaal-list.component.html',
  styleUrls: ['./materiaal-list.component.css']
})
export class MateriaalListComponent implements OnInit {


  filterItems =  [
    { value: "Zomer", checked : false },
    { value: "Herfst" , checked : false },
    { value : "Alles", checked : true }
  ];

  constructor(private _materiaalDataService : MateriaalDataService) {}
  

  get materiaal(){
    return this._materiaalDataService.materiaal;
  }

  checked(){
    return this.filterItems.filter(item => { return item.checked; });
  }
  ngOnInit(): void {
  }

}
