import { Component, OnDestroy, OnInit} from '@angular/core';
import {Subscriber, Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit, OnDestroy {

Produit:Product[]=[] ;
productsSub: Subscription | undefined
ProduitCate:Product[]=[] ;
Momo:String="";
constructor(private produitService:ProductsService){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

ngOnInit(): void {

  /*this.produitService.getAllProducts()
  .subscribe((value:Product[])=>{
    this.Produit=value
   // console.log(this.Produit);
  })*/
this.productsSub=this.produitService.getAllProducts()
  .subscribe({
    next:(value:Product[])=>{
      this.Produit=value
    },
    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      console.log("Completed");
      
    }
  })
//console.log(this.productsSub);

}
}

