import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShivPoojaModel } from 'src/app/model/shivpooja.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShivpoojaService {
  constructor() { }

  getShivPoojaList() {
    return of(this.shivPoojaList());  // creates observable of json and send
  }

  shivPoojaList() {

    let jsonArrayObject: ShivPoojaModel[] = [
      { listkey: "rudrastakam 1", listvalue: "ॐ नमः शिवाय 1 des" },
      { listkey: "rudrastakam 2", listvalue: "ॐ नमः शिवाय 2 des" },
      { listkey: "rudrastakam 3", listvalue: "ॐ नमः शिवाय 3 des" }

    ]



    return jsonArrayObject;


  }

}
