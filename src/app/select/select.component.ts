import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor() { 
    this.masterSelected = false;
      this.checklist = [
        {id:1,value:'A',isSelected:false},
        {id:2,value:'B',isSelected:false},
        {id:3,value:'C',isSelected:false},
        {id:4,value:'D',isSelected:false}
      ];
  }

  ngOnInit() {
  }
  /**
   * checkUncheckAll() checkall and uncheckall 
   */
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
  }

  /**
   * isAllSelected()
   */
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
  }
}
