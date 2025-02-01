import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmojiSuccess, Confirmable } from '../../shared/decorators/index'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @EmojiSuccess()
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

  
 


  @Confirmable('Are you sure?')
  changeAge() {
    this.age += 1; // 触发 setter，导致 ageChange.emit
  }
  constructor() { }

  ngOnInit() {
  }


}
