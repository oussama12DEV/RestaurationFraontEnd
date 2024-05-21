import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TemplateComponent } from './template/template.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatList, MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ItemsComponent } from './items/items.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "@angular/material/card";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { MenusComponent } from './menus/menus.component';
import { LoginComponent } from './login/login.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import { AjouterItemsComponent } from './ajouter-items/ajouter-items.component';
import { CaddieComponent } from './caddie/caddie.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ItemsComponent,
    MenusComponent,
    LoginComponent,
    AjouterItemsComponent,
    CaddieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDrawer,
    MatToolbar,
    MatIconButton,
    MatIconModule,
    MatButtonModule,
    MatDrawerContainer,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    HttpClientModule,
    MatCardHeader,
    MatCardModule,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatPaginatorModule,
    MatListModule,
    FaIconComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatCheckbox,
    MatOption,
    MatSelect,
    FormsModule,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatRow,
    MatHeaderRow,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
