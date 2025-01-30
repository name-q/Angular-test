import { Component, OnInit } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  userData: any

  constructor(private infoService: InfoService) {
  }

  ngOnInit() {
    this.getGithubUser('name-q')
  }

  getGithubUser(name: string) {
    this.infoService.getUserInfo(name).subscribe(
      data => {
        console.log(data, '<<<get user info success')
        this.userData = data
        /*
        
        {
          "login": "name-q",
          "id": 38726835,
          "node_id": "MDQ6VXNlcjM4NzI2ODM1",
          "avatar_url": "https://avatars.githubusercontent.com/u/38726835?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/name-q",
          "html_url": "https://github.com/name-q",
          "followers_url": "https://api.github.com/users/name-q/followers",
          "following_url": "https://api.github.com/users/name-q/following{/other_user}",
          "gists_url": "https://api.github.com/users/name-q/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/name-q/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/name-q/subscriptions",
          "organizations_url": "https://api.github.com/users/name-q/orgs",
          "repos_url": "https://api.github.com/users/name-q/repos",
          "events_url": "https://api.github.com/users/name-q/events{/privacy}",
          "received_events_url": "https://api.github.com/users/name-q/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false,
          "name": "name-q",
          "company": null,
          "blog": "",
          "location": "nanjing",
          "email": null,
          "hireable": null,
          "bio": null,
          "twitter_username": null,
          "public_repos": 42,
          "public_gists": 0,
          "followers": 6,
          "following": 3,
          "created_at": "2018-04-25T13:33:14Z",
          "updated_at": "2024-10-29T05:12:47Z"
        }
        */
      },
      error => {
        console.log(error, '<<<get user info error')

        /*
          {
              "headers": {
                  "normalizedNames": {},
                  "lazyUpdate": null
              },
              "status": 403,
              "statusText": "OK",
              "url": "https://api.github.com/users/name-q",
              "ok": false,
              "name": "HttpErrorResponse",
              "message": "Http failure response for https://api.github.com/users/name-q: 403 OK",
              "error": {
                  // api response
                  "message": "API rate limit exceeded for 1.1.1.1. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
                  "documentation_url": "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
              }
          }
        */

      }
    )
  }



}
