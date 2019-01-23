import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="";
  public click = "";
  constructor() { }

  ngOnInit() {
  }
  onClick(event,name){
    console.log(event,name)
    this.click = name;
  }

}
