import { Component, EventEmitter, Input, OnChanges, SimpleChanges, OnInit, Output, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.less']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() menus: TopMenu[];
  @Output() tabSelected = new EventEmitter();
  @Input() backgroundColor = "yellow";
  selectedIndex = -1;
  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}