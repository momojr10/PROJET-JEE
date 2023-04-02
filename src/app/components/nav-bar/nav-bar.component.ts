import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  totalItem:number=0
  Categorie:Category[]=[]
  listproduct_parcat:Product[]=[]
  catsSub: Subscription | undefined
  constructor(private produitService:ProductsService, private route:ActivatedRoute,private cartService:CartService,private router: Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    $(".dropdown").on({
      mouseenter:function() {
        $(".dropdown-menu").show();
      },
      mouseleave:function(){
        $(".dropdown-menu").hide();
      }
})

this.cartService.getProducts()
.subscribe(data=>{
  this.totalItem=data.length;

})

//console.log(this.route.snapshot.params['id']);


this.produitService.getAllCategory()
    .subscribe((value:Category[])=>{
      this.Categorie=value
      console.log(this.Categorie);
    }) 
 

}
navigate(){
  this.router.navigate(["/panier"]);
  //console.log("momo");  
}
getProductsByCat(c:any){
  this.router.navigateByUrl('pageaccueil/'+c.nameCat);
 // console.log(c);
}
}
