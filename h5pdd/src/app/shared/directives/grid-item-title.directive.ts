import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from "@angular/core";

@Directive({
   selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit{

  constructor(private elr:ElementRef, private rd2:Renderer2){
  }
  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement,'grid-area','title');
    this.rd2.setStyle(this.elr.nativeElement,'font-size','12px');
    this.rd2.setStyle(this.elr.nativeElement,'margin-left','4px');
  }
}
