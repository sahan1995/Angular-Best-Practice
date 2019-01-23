import { Component } from '@angular/core';

function log(target,name,des) {
  console.log(target,name,des);

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  @log
  asimpleMethod(){
    console.log("Hello Angular")
  }

}
