import {
  Component, OnInit, Input, Renderer2,
  ViewChild, ElementRef, OnDestroy,
  AfterViewInit
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string,
  link: string,
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imgSlider', { static: false }) imgSlider: ElementRef;
  @Input() intervalSeconds = 3;
  selectedIndex = 0;
  intervalId;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        (this.getIndex(++this.selectedIndex) % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    }, this.intervalSeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  handleScroll(ev) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

}
