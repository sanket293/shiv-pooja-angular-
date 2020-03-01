import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listItems=["ॐ नमः शिवाय 1","ॐ नमः शिवाय 2 ","ॐ नमः शिवाय 3"]
  constructor() { }

  ngOnInit() {
  }
  listItemClick(index){
    console.log( "."+index);
    
  }
}
