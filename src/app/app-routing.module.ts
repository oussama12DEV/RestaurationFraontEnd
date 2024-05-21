import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {MenusComponent} from "./menus/menus.component";
import {LoginComponent} from "./login/login.component";
import {CaddieComponent} from "./caddie/caddie.component";
import {AjouterItemsComponent} from "./ajouter-items/ajouter-items.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:"home", component :HomeComponent,
  },
  {path:"items/:id", component :ItemsComponent,
  },
  {path:"menus", component :MenusComponent,
  },
  {path:"login", component :LoginComponent,
  },
  {path:"caddie", component :CaddieComponent,
  },
  {path:"ajouter/:idmenu", component :AjouterItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
