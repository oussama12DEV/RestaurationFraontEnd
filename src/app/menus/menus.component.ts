import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  public menus: any;

  constructor(private sanitizer: DomSanitizer, public menuService: MenuService, private http: HttpClient) { }


  ngOnInit(): void {
    interface Menu {
      _links: {
        items: {
          href: string;
        };
      };

    }

    this.menuService.getMenusWithItems().subscribe((data) => {
      /*la premiere methode
      this.menus = data;
      console.log(this.menus);*/

    forkJoin(
      data._embedded.menus.map((menu : Menu) =>
        this.http.get(menu._links.items.href).pipe(
          map((items: any) => {
            if (items._embedded.items) {
              return {...menu, items: items._embedded.items};
            } else {
              return {...menu, items: []};
            }
          })
        )
      )
    ).subscribe(menuss => {
      this.menus = menuss;
      console.log(this.menus);
    });

    }, error => {
      console.error(error);
    });
  }
}
