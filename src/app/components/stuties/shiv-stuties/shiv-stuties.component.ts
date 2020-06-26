import { Component, OnInit } from '@angular/core';
import { DisplayTextModel } from 'src/app/model/display.model';
import { DisplayService } from 'src/app/services/display/display.service';
import { ShivStutieModel } from 'src/app/model/shivstutiemodel.model';
import { AppConstants } from 'src/app/others/appconstants';

@Component({
  selector: 'app-shiv-stuties',
  templateUrl: './shiv-stuties.component.html',
  styleUrls: ['./shiv-stuties.component.css']
})
export class ShivStutiesComponent implements OnInit {

  titleDisplay: string;
  displayText: string;
  displayTextObj: DisplayTextModel;
  constructor(private _displayService: DisplayService) { }

  ngOnInit() {
    this.displayTextObj = this._displayService.getSelectedText();
    console.log(this.displayTextObj);

    if (this.displayTextObj.pageComponent === AppConstants.NAV_HOME) {
      // display stuties and pooja texts
      let shivStutieObj: ShivStutieModel = this.displayTextObj.selectedText;
      this.displayText = shivStutieObj.listvalue;
      this.titleDisplay = shivStutieObj.listkey;

    }

  }
}
