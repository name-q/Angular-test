import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) { }

  flexStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-around',
    'align-items': 'center',
  };

  public testData = [{
    name: 'qy',
    age: 29
  }, {
    name: 'qy-x',
    age: 291
  }]

  ngOnInit() {
    setTimeout(() => {
      this.testData = []
    }, 3000)

    // 获取/:id的路由参数
    let { id } = this.routeInfo.snapshot.params
    console.log(id, '<<<<id')
    
    let { queryParams } = this.routeInfo.snapshot
    console.log(queryParams, '<<<<queryParams')

  }


}
