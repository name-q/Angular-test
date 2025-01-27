import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  constructor() { }

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
  }


}
