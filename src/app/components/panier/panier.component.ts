import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
 
  Products:Product[] | undefined
  Total:Number | undefined
 
  emptycart(){
  
  }
  removeItem(produit:Product){

  }
  
}

