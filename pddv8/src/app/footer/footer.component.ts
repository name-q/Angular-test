import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public footer = `©️${new Date().getFullYear()} xxxyyyzzz`

  ngOnInit() {
  }

}
