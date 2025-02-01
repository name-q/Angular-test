import { Component, EventEmitter, Input, OnChanges, SimpleChanges, OnInit, Output, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.less']
})
export class ScrollableTabComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  // 检测组件输入值的变化
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called with changes:', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  selectedIndex = -1
  @Input() menus: TopMenu[] = []

  @Output() public onSelectMenu: EventEmitter<TopMenu> = new EventEmitter<TopMenu>();
  public selectMenu = (i: number): any => {
    this.selectedIndex = i;
    this.onSelectMenu.emit(this.menus[i]);
  }


}
