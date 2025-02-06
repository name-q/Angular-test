import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TabItem } from './shared/footer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>;
  path$: Observable<string>;

  public parentComponentAge = 100;

  title = 'h5pdd';


  constructor(
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      // tap(e => console.log(e, 'tap')),
      filter(ev => ev instanceof NavigationEnd),
      map((e: NavigationEnd) => {
        const arr = e.url.split('/');
        // console.log(arr);
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    );
    this.path$ = this.router.events.pipe(filter(ev => ev instanceof NavigationEnd), map((e: NavigationEnd) => {
      const arr = e.url.split('/');
      return arr[1];
    }));
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : 0;
  }

  handleTabSelected(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
}
