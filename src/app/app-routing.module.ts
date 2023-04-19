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
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AuthGuard } from './services/AuthGuard.service';

const routes: Routes = [

  {
    path:"login", 
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"",
    redirectTo:'pageaccueil/produit',
    pathMatch:'full'
  },
      {
        path:'dashboard', 
        component:PagedashboardComponent,
        canActivate: [AuthGuard]
      },  
       {
        path:'pageaccueil/:name', 
        component:PageaccueilComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'panier', 
        component:PagepanierComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'cat', 
        component:CategorieComponent,
        canActivate: [AuthGuard]

      },
      {
        path:"admin/0",
        redirectTo:'admin/0',
        pathMatch:'full'
      },
      {
        path:'admin/:id', 
        component:AdminCompComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'edit', 
        component:EditComponentComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'inscription', 
        component:InscriptionComponent,
        pathMatch:'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
