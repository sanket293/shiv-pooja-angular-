import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display/display.service';
import { DisplayTextModel } from 'src/app/model/display.model';
import { AppConstants } from 'src/app/others/appconstants';
import { ShivPoojaModel } from 'src/app/model/shivpooja.model';

@Component({
  selector: 'app-display-shiv-pooja',
  templateUrl: './display-shiv-pooja.component.html',
  styleUrls: ['./display-shiv-pooja.component.css']
})
export class DisplayShivPoojaComponent implements OnInit {
  titleDisplay: string;
  displayText: string;
  displayTextObj: DisplayTextModel;
  constructor(private _displayService: DisplayService) { }

  ngOnInit() {
    this.displayTextObj = this._displayService.getSelectedText();
    console.log(this.displayTextObj);

    if (this.displayTextObj.pageComponent === AppConstants.NAV_HOME) {
      // display stuties and pooja texts
      let shivPoojaObj: ShivPoojaModel = this.displayTextObj.selectedText;
      this.displayText = shivPoojaObj.listvalue;
      this.titleDisplay = shivPoojaObj.listkey;

    }

  }

}
