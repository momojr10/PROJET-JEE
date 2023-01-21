import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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
  this.productsSub=this.produitService.getbyCatProducts("Manteau")
    .subscribe({
      next:(value:Product[])=>{
        this.Produit=value
        //console.log(this.Produit[0]);
  
       
  
     
  
        
  
      },
      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        console.log("Completed");
        
      }
    })
  
  }
 

 
  

}


