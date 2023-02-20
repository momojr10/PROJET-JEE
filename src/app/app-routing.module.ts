import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './components/panier/panier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PagedashboardComponent } from './Pages/dashboard/pagedashboard.component';
import { PagepanierComponent } from './Pages/pagepanier/pagepanier.component';

const routes: Routes = [
  {
    path:"",
    component:PageaccueilComponent,
    pathMatch:'full',
    children:[
      {
        path:'pageaccueil', 
        component:PageaccueilComponent
      }
    ]
  },
      {
        path:'dashboard', 
        component:PagedashboardComponent,
        pathMatch:'full'
      },
      {
        path:'panier', 
        component:PagepanierComponent,
        pathMatch:'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
