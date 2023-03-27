import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  listproduct_parcat:Product[]=[]
  productsSub: Subscription | undefined
  constructor(private produitService:ProductsService){}
    
  
  ngOnInit(): void {
  
  this.productsSub=this.produitService.getbyCatProducts("Manteaux")
  .subscribe({
    next:(value:Product[])=>{
      this.listproduct_parcat=value
      

      console.log(this.listproduct_parcat);


    },
    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      //console.log("Completed");

    }
  }) 

}
}
