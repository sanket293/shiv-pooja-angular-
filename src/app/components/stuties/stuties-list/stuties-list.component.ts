import { Component, OnInit } from '@angular/core';
import { ShivStutieModel } from 'src/app/model/shivstutiemodel.model';
import { Router } from '@angular/router';
import { ShivstutiesService } from 'src/app/services/shivstuties/shivstuties.service';
import { Stuties } from 'src/app/model/enums/stuties';
import { AppConstants } from 'src/app/others/appconstants';

@Component({
  selector: 'app-stuties-list',
  templateUrl: './stuties-list.component.html',
  styleUrls: ['./stuties-list.component.css']
})
export class StutiesListComponent implements OnInit {
  shivStutieList: ShivStutieModel[] = [];
  constructor(
    private _shivStutieService: ShivstutiesService,
    private router: Router) { }

  async ngOnInit() {
    await this.fillList();
  }

  async fillList() {
    this._shivStutieService.getShivStutiesList().subscribe((list) => {
      list.forEach(element => {
        console.log(element.key);// todo remove
        this.shivStutieList.push(element); // this is the list for all stuties
      });
    });
  }

  async stutieListItemClick(stutieId: number) {

    var stutie = await this.shivStutieList.find((stutie) => {
      if (Stuties[Stuties[stutie.stutieId]] === stutieId) {
        return stutie;
      }
    });

    this.router.navigate(['shiv-stuties'], { queryParams: { "Stutie" : JSON.stringify(stutie) } });
  }

}
