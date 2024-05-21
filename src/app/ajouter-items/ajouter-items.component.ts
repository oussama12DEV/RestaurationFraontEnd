import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {MenuService} from "../services/menu.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-ajouter-items',
  templateUrl: './ajouter-items.component.html',
  styleUrl: './ajouter-items.component.css'
})
export class AjouterItemsComponent implements OnInit{
  public itemsform!:FormGroup
  fileselected! :any
  public itemsid: any;
  public currentFileUpload: any;

  constructor(public fb:FormBuilder,public service:MenuService,public router:Router,public Rout:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.itemsform = this.fb.group({
      name : ['',Validators.required],
      image :  ['',Validators.required],
      price :  ['',Validators.required],
      available :  [false,Validators.required],
      offre :  [false,Validators.required],


    })
  }
  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      this.fileselected = event.target.files[0];
    }
  }
  onSubmit() {
    let items = this.itemsform.value
   this.currentFileUpload = this.fileselected;
    this.Rout.params.subscribe(params => {
      this.itemsid = params['idmenu'];
    this.service.AjouterItems(this.itemsid,this.fileselected,items).subscribe({
      next : data=>{
        this.router.navigateByUrl("/items/"+this.itemsid)
      },
      error : err => {
        console.log(err)
      }
    })
  });
  }
}
