import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider } from 'src/app/components';
import { HomeService } from 'src/app/shared/services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  sliders$: Observable<ImageSlider[]>;

  channels: Channel[] = [];

  selectTabLink$: Observable<string>;

  startDate = new Date();
  futureDate = new Date(new Date().getTime() + 3600 * 1000 * 24 * 7);



  constructor(
    private router: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private service: HomeService
  ) { }

  sub:Subscription;
  ngOnInit() {
    // 一次获取
    // this.selectTabLink = this.router.snapshot.params.tabLink;
    // 监听变更获取
    // this.router.paramMap.subscribe(params => {
    //   this.selectTabLink = params.get('tabLink');
    //   // 手动提醒变化 （非@input变化 onPush模式下，不会自动更新）
    //   this.cd.markForCheck()
    // })
    this.selectTabLink$ = this.router.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => {
          return params.get('tabLink');
        })
      )

    this.sliders$ = this.service.getBanners().pipe(
      filter(res => res.data !== null),
      map(res => res.data) // 转换为 ImageSlider 数组
    );

    this.service.getChannels().subscribe(res => {
      if (res.data) {
        this.channels = res.data;
        this.cd.markForCheck()
      }
    })


    // 此处不使用rxjs要关闭监听防止内存泄漏
    this.sub = this.router.paramMap.subscribe(params => console.log(params))

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }




}
