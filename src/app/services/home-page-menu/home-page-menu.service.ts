import { Injectable } from '@angular/core';
import { HomePageMenuListModel } from 'src/app/model/home-page-menu-list.model';
import { HomePageMenuList } from 'src/app/model/enums/home-page-menu-list';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class HomePageMenuService {

  constructor() { }

  getHomeMenuList() {
    return of(this.homeMenuList());  // creates observable of json and send
  }

  homeMenuList() {

    var menuList: HomePageMenuListModel[] =
      [
        {
          homeMenuName: "Stuties",
          homeMenuDesc:"Desc",
          imgsrc:"https://shivayblog.files.wordpress.com/2017/06/s1.jpg",
          homeMenuId: HomePageMenuList.Stuties
        },
        {
          homeMenuName: "QuoteStatus",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.QuoteStatus
        },
        {
          homeMenuName: "Kathas",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.Kathas
        },
        {
          homeMenuName: "Bhajans",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.Bhajans
        },
        {
          homeMenuName: "Pooja",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.Pooja
        },
        {
          homeMenuName: "Photos",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.Photos
        },
        {
          homeMenuName: "Media",
          homeMenuDesc:"Desc",
          imgsrc:"",
          homeMenuId: HomePageMenuList.Media
        },
      ];

     return menuList; 
  }

}
