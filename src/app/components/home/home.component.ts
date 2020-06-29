import { Component, OnInit } from '@angular/core';
import { ShivStutieModel } from 'src/app/model/shivstutiemodel.model';
import { DisplayService } from 'src/app/services/display/display.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/others/appconstants';
import { ShivstutiesService } from 'src/app/services/shivstuties/shivstuties.service';
import { HomePageMenuService } from 'src/app/services/home-page-menu/home-page-menu.service';
import { HomePageMenuList } from 'src/app/model/enums/home-page-menu-list';
import { HomePageMenuListModel } from 'src/app/model/home-page-menu-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  homeMenuList: HomePageMenuListModel[] = [];

  constructor(
    private _homeMenuListService: HomePageMenuService,    
    private router: Router
  ) { }

  ngOnInit() {
    // this.fillList();
    this.displayMenuList();
  }

  // this fn will display the menus(Dynamically) at home page
  displayMenuList() {
    this._homeMenuListService.getHomeMenuList().subscribe((list) => {
      list.forEach(element => {
        this.homeMenuList.push(element);
      });
    });
  }



  async homeMenuItemClick(item: HomePageMenuList) {
    switch (item) {
      case HomePageMenuList.Stuties:
        // this._displayService.setSelectedText(this.shivStutieObj[index], AppConstants.NAV_HOME);
        this.router.navigate(['stuties-list']);
        break;
      default:
        alert("This feature is coming soon");
    }

  }


}


