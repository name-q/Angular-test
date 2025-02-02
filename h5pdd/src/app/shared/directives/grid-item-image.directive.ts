import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding, HostListener } from "@angular/core";

@Directive({
   selector: '[appGridItemImg]',
})
export class GridItemImageDirective {
  @Input() appGridItemImg = '1rem';
  constructor(private elr:ElementRef, private rd2:Renderer2){
  }
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement,'grid-area','image');
    this.rd2.setStyle(this.elr.nativeElement,'width',this.appGridItemImg);
    this.rd2.setStyle(this.elr.nativeElement,'height',this.appGridItemImg);
    // this.rd2.setStyle(this.elr.nativeElement,'heightobject-fit','cover');
  }

  @HostListener('click',['$event.target'])
  handleClick(ev){
    console.log(ev);
  }

}
