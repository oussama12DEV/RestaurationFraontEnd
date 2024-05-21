import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {NavigationExtras, Router} from "@angular/router";
import {faPlus, faShoppingCart} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit{
  public menu:any;
  public items:any;
  faShoppingCart = faShoppingCart;
  plus = faPlus;

constructor(public menuService:MenuService,public router:Router) {
}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((data) => {
      console.log(data);
      this.menu = data;
    },error => {
      console.log(error);
    });
  }


  getitems(i: any) {
   this.router.navigateByUrl("/items/"+i.id,{state:{data:i}})
   }

  openAddItemDialog(i: any) {

  }

  ajouteritem(i: any) {
    this.router.navigateByUrl("/ajouter/"+i.id,{state:{data:i}})
  }


}
