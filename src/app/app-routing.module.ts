import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './components/panier/panier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PagedashboardComponent } from './Pages/dashboard/pagedashboard.component';
import { PagepanierComponent } from './Pages/pagepanier/pagepanier.component';
import { LoginComponent } from './components/login/login.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AdminCompComponent } from './components/admin-comp/admin-comp.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'pageaccueil/produit',
    pathMatch:'full'
  },
      {
        path:'dashboard', 
        component:PagedashboardComponent,
        pathMatch:'full'
      },
       {
        path:'pageaccueil/:name', 
        component:PageaccueilComponent,
        pathMatch:'full'
      },
      {
        path:'panier', 
        component:PagepanierComponent,
        pathMatch:'full'
      },{
        path:'login', 
        component:LoginComponent,
        pathMatch:'full'
      },
      {
        path:'cat', 
        component:CategorieComponent,
        pathMatch:'full'
      },
      {
        path:"admin/0",
        redirectTo:'admin/0',
        pathMatch:'full'
      },
      {
        path:'admin/:id', 
        component:AdminCompComponent,
        pathMatch:'full'
      },
      {
        path:'edit', 
        component:EditComponentComponent,
        pathMatch:'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
