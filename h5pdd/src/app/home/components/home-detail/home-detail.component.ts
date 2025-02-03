import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/components';
import { HomeService } from 'src/app/shared/services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  sliders: ImageSlider[] = [];

  channels: Channel[] = [];

  selectTabLink = '';
  constructor(
    private router: ActivatedRoute, 
    private cd: ChangeDetectorRef,
    private service: HomeService
  ) { }

  ngOnInit() {
    // 一次获取
    // this.selectTabLink = this.router.snapshot.params.tabLink;
    // 监听变更获取
    this.router.paramMap.subscribe(params => {
      this.selectTabLink = params.get('tabLink');
      // 手动提醒变化 （非@input变化 onPush模式下，不会自动更新）
      this.cd.markForCheck()
    })
    this.service.getBanners().subscribe(res => {
      if(res.data) {
        this.sliders = res.data;
        this.cd.markForCheck()
      }
    })

    this.service.getChannels().subscribe(res => {
      if(res.data) {
        this.channels = res.data;
        this.cd.markForCheck()
      }
    })
  }


}
