import { Component } from '@angular/core';
import { TopMenu } from './components';

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
}
