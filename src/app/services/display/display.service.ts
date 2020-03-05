import { Injectable } from '@angular/core';
import { DisplayTextModel } from 'src/app/model/display.model';
import { AppConstants } from 'src/app/others/appconstants';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }


  //#region getter setter of selectedText

  displayText: DisplayTextModel = {
    selectedText: "ॐ नमः शिवाय:",
    pageComponent: AppConstants.NAV_HOME
  };

  getSelectedText() {
    return this.displayText;
  }
  async setSelectedText(text: any, fromComponent: any) {
    this.displayText.selectedText = text;
    this.displayText.pageComponent = fromComponent;
  }
  //#endregion

}
