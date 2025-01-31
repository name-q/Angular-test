import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'h5pdd';

  menus: TopMenu[] = [
    { title: '热门', link: '/home' },
    { title: '文章', link: '/article' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
    { title: '标签', link: '/tag' },
  ]

  handleTabSelected = (index: TopMenu) => {
    console.log(index, '<<<<<handleTabSelected')
  }

  showTab = true

  handleReverseShowTab = () => this.showTab = !this.showTab


  sliders: ImageSlider[] = [
    {
      imgUrl:'https://img.88tph.com/tphc.1/44/0f/RA_xAwuCEemMSQARMiynhQ.jpg',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'http://img2.baidu.com/it/u=848998045,3871654136&fm=253&app=138&f=JPEG?w=1878&h=800',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'http://img2.baidu.com/it/u=373579259,2654080847&fm=253&app=138&f=JPEG?w=1878&h=800',
      link:'',
      caption:'图片无法显示'
    },
    {
      imgUrl:'https://img1.baidu.com/it/u=3491864892,3741956669&fm=253&fmt=auto&app=138&f=JPEG?w=1600&h=500',
      link:'',
      caption:'图片无法显示'
    },{
      imgUrl:'https://img2.baidu.com/it/u=3046952060,177339&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=500',
      link:'',
      caption:'图片无法显示'
    }
  ];
}
