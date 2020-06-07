import { Component, OnInit } from '@angular/core';
declare let $: any; 

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showSelectTab(value){
    if(value == 'home'){
      $('#about').removeClass("active");
      $('#contact').removeClass("active");
      $('#'+value).addClass("active");
      $('#aboutText').removeClass("active");
      $('#contactText').removeClass("active");
      $('#'+value+'Text').addClass("active");
    }else if(value == 'about'){
      $('#home').removeClass("active");
      $('#contact').removeClass("active");
      $('#'+value).addClass("active");
      $('#homeText').removeClass("active");
      $('#contactText').removeClass("active");
      $('#'+value+'Text').addClass("active");
    }else if(value == 'contact'){
      $('#home').removeClass("active");
      $('#about').removeClass("active");
      $('#'+value).addClass("active");
      $('#aboutText').removeClass("active");
      $('#homeText').removeClass("active");
      $('#'+value+'Text').addClass("active");
    }
  }
}
