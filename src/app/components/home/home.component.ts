import { Component, OnInit } from '@angular/core';
import { ShivPoojaModel } from 'src/app/model/shivpooja.model';
import { ShivpoojaService } from 'src/app/services/shivpooja/shivpooja.service';
import { DisplayService } from 'src/app/services/display/display.service';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/others/appconstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shivPoojaObj: ShivPoojaModel[] = [];

  constructor(private _shivpoojaService: ShivpoojaService,
    private _displayService: DisplayService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fillList();
  }

  fillList() {

    this._shivpoojaService.getShivPoojaList().subscribe((list) => {

      list.forEach(element => {
        console.log(element.listkey);
        this.shivPoojaObj.push(element);
      });
    });
  }

  async listItemClick(index: number) {

    console.log("." + this.shivPoojaObj[index].listvalue);

    this._displayService.setSelectedText(this.shivPoojaObj[index], AppConstants.NAV_HOME);
    this.router.navigate(['display-shiv-pooja']);

  }
}
