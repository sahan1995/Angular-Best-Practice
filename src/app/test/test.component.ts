import {Component, OnInit} from '@angular/core';

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
