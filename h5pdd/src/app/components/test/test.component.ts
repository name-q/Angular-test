import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  name:string = 'name-q'

  private _age:number = 29
 
  @Input()
  public get age() {
    return this._age
  }

  @Output() public ageChange = new EventEmitter<number>()


  public set age(value: number) {
    console.log('ageChange', value)
    this._age = value
    this.ageChange.emit(value)
  }

  
 


  changeAge() {
    this.age += 1; // 触发 setter，导致 ageChange.emit
  }
  constructor() { }

  ngOnInit() {
  }


}
