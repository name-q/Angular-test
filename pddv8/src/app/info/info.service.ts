import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private GITHUB_API_URL = 'https://api.github.com/users'; // GitHub API 基础地址

  constructor(private http: HttpClient) { }

  // 获取 GitHub 用户数据
  public getUserInfo(username: string): Observable<any> {
    return this.http.get(`${this.GITHUB_API_URL}/${username}`);
  }


}
