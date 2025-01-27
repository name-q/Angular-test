import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public info = 'https://www.baidu.com'

  public jump = () => {
    // window.location.href = this.info
    this.route.navigate(['/input'])
  }

  public links = [
    {
      sref:'/info',
      name:'信息展示(ClientInfo)'
    },
    {
      sref:'/input',
      name:'信息录入(ClientInput)'
    },
  ]

}
