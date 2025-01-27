import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public info = 'https://www.baidu.com'

  public jump = () => {
    window.location.href = this.info
  }

}
