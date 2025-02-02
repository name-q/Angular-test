import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/components';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  sliders: ImageSlider[] = [
    {
      imgUrl: 'https://img.88tph.com/tphc.1/44/0f/RA_xAwuCEemMSQARMiynhQ.jpg',
      link: '',
      caption: '图片无法显示'
    },
    {
      imgUrl: 'http://img2.baidu.com/it/u=848998045,3871654136&fm=253&app=138&f=JPEG?w=1878&h=800',
      link: '',
      caption: '图片无法显示'
    },
    {
      imgUrl: 'http://img2.baidu.com/it/u=373579259,2654080847&fm=253&app=138&f=JPEG?w=1878&h=800',
      link: '',
      caption: '图片无法显示'
    },
    {
      imgUrl: 'https://img1.baidu.com/it/u=3491864892,3741956669&fm=253&fmt=auto&app=138&f=JPEG?w=1600&h=500',
      link: '',
      caption: '图片无法显示'
    }, {
      imgUrl: 'https://img2.baidu.com/it/u=3046952060,177339&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=500',
      link: '',
      caption: '图片无法显示'
    }
  ];

  channels: Channel[] = [
    {
      id: 1,
      icon: 'assets/icons/refund.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 2,
      icon: 'assets/icons/fav_store.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 3,
      icon: 'assets/icons/membership.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 4,
      icon: 'assets/icons/fav_store.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 5,
      icon: 'assets/icons/coupon.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 6,
      icon: 'assets/icons/membership.png',
      title: '限时秒杀',
      link: 'hot'
    },
    {
      id: 7,
      icon: 'assets/icons/coupon.png',
      title: '限时秒杀',
      link: 'hot'
    }

  ];

  selectTabLink = '';
  constructor(private router: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // 一次获取
    // this.selectTabLink = this.router.snapshot.params.tabLink;
    // 监听变更获取
    this.router.paramMap.subscribe(params => {
      this.selectTabLink = params.get('tabLink');
      // 手动提醒变化 （非@input变化 onPush模式下，不会自动更新）
      this.cd.markForCheck()
    })
  }


}
