import {Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Client} from "./client.modele";

import {ItemList} from "./itemList.modele";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Caddie {
  public name:string="";
  public items:Map<number,ItemList>=new Map();
  public client:Client={name:"",address:"",phoneNumber:"",email:"",username:""};

setname(name: string) {
  this.name = name;
}
}
