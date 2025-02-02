import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/scrollable-tab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  menus: TopMenu[] = [
    {
      id: 1,
      title: '热门',
      link: 'hot'
    },
    {
      id: 2,
      title: '女装',
      link: 'woman'
    },
    {
      id: 3,
      title: '家具',
      link: 'man'
    },
    {
      id: 4,
      title: '手机',
      link: 'phone'
    },
    {
      id: 5,
      title: '百货',
      link: 'phone'
    },
    {
      id: 4,
      title: '运动',
      link: 'spots'
    },
    {
      id: 5,
      title: '食物',
      link: 'foot'
    },
    {
      id: 6,
      title: '电器',
      link: 'foots'
    },
    {
      id: 7,
      title: '鞋包',
      link: 'foots'
    },
    {
      id: 8,
      title: '美妆',
      link: 'foots'
    },
    {
      id: 9,
      title: '电脑',
      link: 'foots'
    },
    {
      id: 10,
      title: '水果',
      link: 'foots'
    },
    {
      id: 10,
      title: '童装',
      link: 'foots'
    }
  ];

  handleSelection(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
