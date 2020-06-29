import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/others/appconstants';
import { ShivStutieModel } from 'src/app/model/shivstutiemodel.model';
import { Stuties } from 'src/app/model/enums/stuties';

@Component({
  selector: 'app-shiv-stuties',
  templateUrl: './shiv-stuties.component.html',
  styleUrls: ['./shiv-stuties.component.css']
})
export class ShivStutiesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  stutie: ShivStutieModel = null;
  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      var stutieParams = params["Stutie"];
      this.stutie = JSON.parse(stutieParams);
    });
  }
}
