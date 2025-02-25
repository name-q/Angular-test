import { Component, Input, OnInit } from '@angular/core';

export interface Channel {
  id: number,
  icon: string,
  title: string,
  link: string
}


@Component({
  selector: 'app-horizontal-gride',
  templateUrl: './horizontal-gride.component.html',
  styleUrls: ['./horizontal-gride.component.less']
})
export class HorizontalGrideComponent implements OnInit {
  @Input() cols = 8;
  @Input() displayCols = 5;
  sliderMargin = '0';

  constructor() { }

  ngOnInit() {
  }


  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }


  public get templateColumns(): string {
    return `repeat(${this.cols},calc(
      100vw - ${this.displayCols * 0.4}rem)/${this.displayCols}))`;
  }

  handleScroll(event) {
    this.sliderMargin = `0 ${100 * event.scrollLeft / event.scrollWidth}%`;
  }

}
