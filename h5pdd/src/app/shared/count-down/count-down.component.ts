import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})
export class CountDownComponent implements OnInit {

  @Input() startDate: Date = new Date();
  @Input() futureDate: Date;

  countDown$: Observable<string>

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable$(this.startDate, this.futureDate)
  }

  private diffInSec = (startDate: Date, futureDate: Date): number => {
    console.log(startDate, futureDate);
    const diff = futureDate.getTime() - startDate.getTime();
    return Math.floor(diff / 1000);
  }

  private getCountDownObservable$ = (startDate: Date, futureDate: Date): Observable<string> => {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        days: Math.floor(sec / 86400),
        hours: Math.floor((sec / 3600) % 24),
        minutes: Math.floor((sec / 60) % 60),
        seconds: sec % 60
      })),
      map(time => {
        return `${time.days}天${time.hours}小时${time.minutes}分${time.seconds}秒`
      })
    )
  }

}
