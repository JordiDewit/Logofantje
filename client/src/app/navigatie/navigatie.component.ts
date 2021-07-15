import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigatie',
  templateUrl: './navigatie.component.html',
  styleUrls: ['./navigatie.component.css']
})
export class NavigatieComponent implements OnInit {

  sidenav_opened=true;

  constructor() { }

  ngOnInit(): void {
  }

}
