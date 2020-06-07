import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoproject';
  constructor(
    private xRouter: Router,
  
  ) {}
  redirect(){
    debugger;
    this.xRouter.navigate(["/columndata/coldetails"]);
  }
}
