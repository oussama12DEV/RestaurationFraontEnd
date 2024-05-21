import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";

@Component({
  selector: 'app-caddie',
  templateUrl: './caddie.component.html',
  styleUrl: './caddie.component.css'
})
export class CaddieComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'actions'];
  dataSource: any[] = [];
  showOrderForm: boolean = false;
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(public caddyservice: MenuService) {
  }

  onremoveproduitfromcaddy(pi: any) {

  }

  // onNewOrder() {
  //   // this.caddyservice.passerCommande().subscribe(data => {
  //   //   alert("Votre commande a été enregistrée");
  //   // }, error => {
  //   //   console.log(error);
  //   // });
  // }

  onNewOrder() {
    this.showOrderForm = true;
  }

  onSubmitOrder() {
    // Logique de soumission du formulaire
    console.log('Name:', this.name);
    console.log('Address:', this.address);
    console.log('Phone:', this.phone);
    this.showOrderForm = false;
  }

  ngOnInit(): void {
    const caddy = this.caddyservice.getcaddy();
    if (caddy?.items) {
      // Conversion de l'iterator en tableau
      this.dataSource = Array.from(caddy.items.values());
      console.log(this.dataSource);
    }
  }
}
