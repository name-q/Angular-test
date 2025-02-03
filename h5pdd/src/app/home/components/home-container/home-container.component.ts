import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/scrollable-tab';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {
  menus: TopMenu[] = [];

  constructor(private router: Router, private service: HomeService) { }

  ngOnInit() {
    this.service.getTabs().subscribe(res => {
      if(res.data) {
        this.menus = res.data;
      }
    });
  }


  handleSelection(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
