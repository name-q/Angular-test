import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Channel, ImageSlider, TopMenu } from 'src/app/components';

type ApiResponse<T> = {
  message: string;
  data: T;
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getBanners() {
    return this.http.get<ApiResponse<ImageSlider[]>>(`${environment.baseUrl}/api/getBannerList`, { params: { a: '1' } })
  }

  getChannels() {
    return this.http.get<ApiResponse<Channel[]>>(`${environment.baseUrl}/api/getChannelList`, { params: { a: '1' } })
  }

  getTabs() {
    return this.http.post<ApiResponse<TopMenu[]>>(`${environment.baseUrl}/api/getTabList`, { b: '2' })
  }
}
