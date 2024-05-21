import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from "../services/menu.service";
import {MatPaginator} from "@angular/material/paginator";
import {faCirclePlus,faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from "@angular/material/table";
import {Item} from "../models/item.modele";
import {ItemList} from "../models/itemList.modele";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit,AfterViewInit {
  itemsid: any;
  newVariable: any; // Déclaration de la nouvelle variable
  items : any;
  cyrcleplus = faCirclePlus;
  cyrcleminus = faCircleMinus;
  @ViewChild(MatPaginator) paginfator! : MatPaginator;
  public datasource : any;
  //itemQuantity: number=1;
  constructor(private Rout: ActivatedRoute,private route:Router,public  menu :MenuService) {
    this.newVariable = this.route.getCurrentNavigation()?.extras.state ; // Initialisation de la nouvelle variable

  }
  ngOnInit(): void {
    this.Rout.params.subscribe(params => {
      this.itemsid = params['id'];
      console.log(this.itemsid);
      if (this.paginfator) {
      this.menu.getitems(this.itemsid, this.paginfator.pageIndex, this.paginfator.pageSize).subscribe((data) => {
        this.items = data;
       // this.items.content.forEach((item: any) => { item.itemQuantity = 1; });
        this.datasource = new MatTableDataSource(this.items.content);
        this.paginfator.length = this.items.totalElements;
        this.paginfator.pageSize = this.items.size;
      }, error => {
        console.log(error);
      });
    }});
  }

    ngAfterViewInit(): void {
      // Listen to page changes
      this.paginfator.page.subscribe(() => {
        // When the page index or size changes, make a new request with the new page index and size
        this.menu.getitems(this.itemsid, this.paginfator.pageIndex, this.paginfator.pageSize).subscribe((data) => {
          this.items = data;
     // this.items.content.forEach((item: any) =>  { item.itemQuantity = 1; });
          console.log(this.items);
          this.datasource = new MatTableDataSource(this.items.content);
          this.paginfator.length = this.items.totalElements;
          this.paginfator.pageSize = this.items.size;
        }, error => {
          console.log(error);
        });
      });

      // Trigger the paginator once manually to load the initial data
      this.paginfator.page.emit();
    }

// Dans votre fichier items.component.ts
  decreaseQuantity(item: any) {
    if (item.quantite > 1) {
      item.quantite--;
    }
  }

  increaseQuantity(item: any) {
    item.quantite++;
  }

  addTocard(item: Item) {

    this.menu.addTocard(item);
  }

  protected readonly ItemList = ItemList;
}
