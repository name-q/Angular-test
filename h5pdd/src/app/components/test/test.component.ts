import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EmojiSuccess, Confirmable } from '../../shared/decorators/index'
import FormatDatePipe from 'src/app/shared/pipes/format-date.pipe'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  @EmojiSuccess()
  name: string = 'name-q'

  private _age: number = 29

  @Input()
  public get age() {
    return this._age
  }

  @Output() public ageChange = new EventEmitter<number>()


  public set age(value: number) {
    console.log('ageChange', value)
    this._age = value
    this.ageChange.emit(value)
  }





  @Confirmable('Are you sure?')
  changeAge() {
    this.age += 1; // 触发 setter，导致 ageChange.emit
  }
  constructor(private ngZone: NgZone, private rd: Renderer2) { }

  ngOnInit() {
  }

  // 写一个按毫秒级别的倒计时 放在别的进程中不影响ng渲染

  // 注销onpush此写法不断更新time导致报错
  // public get time():number {
  //   return Date.now()
  // }


  _time = Date.now()
  public get time(): number {
    return this._time
  }

  @ViewChild('timeRef', { static: true }) timeRef: ElementRef

  ngAfterViewChecked() {
    // 新空间规避不断更新场景
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // this._time = Date.now()
        // this.timeRef.nativeElement.innerText = Date.now()
        this.rd.setProperty(this.timeRef.nativeElement, 'innerText', Date.now())
      }, 100)
    });
  }



}
