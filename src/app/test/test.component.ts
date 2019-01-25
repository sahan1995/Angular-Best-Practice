import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "";
  public click = "";
  public show = true;
  public color = "";
  public colors = ["Red", "Green", "Blue", "Orange", "Black", "White"];
  public name1 = "learning angular ";
  public person={
    firstname : "Sahan",
    lastname : "Rajakaruna",
    age : 15
  }
  public date = new Date();
@Input('parentData') public tit;
  constructor() {
  }

  ngOnInit() {
  }

  onClick(event, name) {

    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  onRedClick() {
    this.color = "red";
  }

  onGreenClick() {
    this.color = "green"
  }

  onBlueClick() {
    this.color = "blue";
  }

}
