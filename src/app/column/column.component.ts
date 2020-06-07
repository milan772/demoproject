import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit  {
  
  list1 = [
    { text: 'item A', selected: false },
    { text: 'item B', selected: false },
    { text: 'item C', selected: false },
    { text: 'item D', selected: false },
    { text: 'item E', selected: false }
  ];
  list2 = [
    { text: 'item F', selected: false },
    { text: 'item G', selected: false }
  ];

  constructor(){

  }
  ngOnInit(){

  }
  
  public toggleSelection(item, list) {
    item.selected = !item.selected;
  }

  /**
   * 
   * @param direction like right, left
   */
  public moveSelected(direction) {
    if (direction === 'left') {
      this.list2.forEach(item => {
        if (item.selected) {
          this.list1.push(item);
        }
      });
      this.list2 = this.list2.filter(i => !i.selected);
    } else {
      this.list1.forEach(item => {
        if (item.selected) {
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter(i => !i.selected);
    }
  }

  /**
   * 
   * @param direction like right, left
   */
  public moveAll(direction) {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
    } else {
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
    }
  }
}