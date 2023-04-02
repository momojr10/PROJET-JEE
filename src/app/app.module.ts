import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { PanierComponent } from './components/panier/panier.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { PagedashboardComponent } from './Pages/dashboard/pagedashboard.component';
import { PagepanierComponent } from './Pages/pagepanier/pagepanier.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminCompComponent } from './components/admin-comp/admin-comp.component';
import { PageAdminComponent } from './Pages/page-admin/page-admin.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductListComponent,
    CategorieComponent,
    PanierComponent,
    FooterComponent,
    NavBarComponent,
    DashboardComponent,

    PageaccueilComponent,
    PagedashboardComponent,
    PagepanierComponent,
    AdminCompComponent,
    PageAdminComponent,
    EditComponentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
