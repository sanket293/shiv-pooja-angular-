import { Component, OnInit } from '@angular/core';
import { ShivStutieModel } from 'src/app/model/shivstutiemodel.model';
import { DisplayService } from 'src/app/services/display/display.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/others/appconstants';
import { ShivstutiesService } from 'src/app/services/shivstuties/shivstuties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shivStutieObj: ShivStutieModel[] = [];

  constructor(
    private _shivStutieService: ShivstutiesService,
    private _displayService: DisplayService,
    private router: Router
  ) { }

  ngOnInit() {
        this.fillList();
  }

  fillList() {
    this._shivStutieService.getShivStutiesList().subscribe((list) => {
      list.forEach(element => {
        console.log(element.listkey);
        this.shivStutieObj.push(element);
      });
    });
  }

  async listItemClick(index: number) {
    this._displayService.setSelectedText(this.shivStutieObj[index], AppConstants.NAV_HOME);
    this.router.navigate(['shiv-stuties']);

  }
}
