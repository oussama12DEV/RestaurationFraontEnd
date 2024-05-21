import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../models/item.modele";
import {Caddie} from "../models/caddie.module";
import {Client} from "../models/client.modele";
import {ItemList} from "../models/itemList.modele";


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public apiUrl = 'http://localhost:8001';
  currentcaddyname: string = "Caddy";
  public cad: Map<string, Caddie> = new Map;
  public caddy!: Caddie;
  public client!: Client;

  constructor(public http: HttpClient) {
    this.caddy = new Caddie();
    this.caddy.setname(this.currentcaddyname);
    this.cad.set(this.currentcaddyname, this.caddy);
  }

  getMenus(): Observable<any> {
    return this.http.get(this.apiUrl + "/menu");
  }

  getitems(i: any, pageIndex: number, pageSize: number) {
    return this.http.get(this.apiUrl + "/menuss/" + i + "/items?page=" + pageIndex + "&size=" + pageSize);
  }

  getMenusWithItems(): Observable<any> {
    return this.http.get(this.apiUrl + "/menus");
  }


  AjouterItems(itemsid: any, file: File, items: any) {
    let formadata: FormData = new FormData();
    formadata.append('file', file);

    // Convertir 'items' en une chaîne JSON et l'ajouter à 'formadata'
    formadata.append('items', JSON.stringify(items));
    const req = new HttpRequest('POST', this.apiUrl + '/itemss/' + itemsid, formadata, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  public addTocard(items:any) {
    let caaddy = this.cad.get(this.currentcaddyname);
    let itmelist= caaddy?.items.get(items.id);
    if (itmelist) {
      itmelist.quantity += items.quantite;
      this.saveCaddies();
    } else {
      itmelist = new ItemList();
      itmelist.prix = items.price;
      itmelist.quantity = items.quantite;
      itmelist.item = items;
      caaddy?.items.set(items.id, itmelist);
      this.saveCaddies();
    }
    console.log(caaddy)

  }

  public saveCaddies() {
    const caddiesArray = Array.from(this.cad.entries());
    let caddiesObject = {};
    caddiesArray.forEach(([key, Caddie]) => {
      caddiesObject = {
        name: Caddie.name,
        items: Object.fromEntries(Caddie.items.entries()),
      };
    });

    const stringifiedCaddies = JSON.stringify(caddiesObject);

    try {
      localStorage.setItem('mycaddies', stringifiedCaddies);
      console.log('Caddies saved to local storage:', stringifiedCaddies);
    } catch (error) {
      console.error('Error saving caddies to local storage:', error);
    }
}

  getcaddy() {
    return this.cad.get(this.currentcaddyname);
  }

  passerCommande() {

  }

  gettotal() {
    let total = 0 ;
    this.cad.get(this.currentcaddyname)?.items.forEach(x=>{
      total+=x.prix*x.quantity;
    })
    return total;
  }
}
