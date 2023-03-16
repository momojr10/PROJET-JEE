import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Subscriber, Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
  
})

export class ProductItemComponent  {
  @Input() Product: any;
  @Input() RandProduct: any;

  data0:string []=[];
  data1:string []=[];
  recup:any[]=[];
constructor(private p:CartService, private router :Router){}

  
  
 
  enterF(Product:any){
    // console.log(Produit.id);
     
   $("."+Product.name).attr("src","/assets/Image_Amoza/"+Product.images[1].imageName);
   $("."+Product.id).removeAttr("hidden");
   $("."+Product.id).show();
   
  
  } 

  leave(Product:any){
   
    $("."+Product.name).attr("src","/assets/Image_Amoza/"+Product.images[0].imageName);
    $("."+Product.id).hide();
    
  }
  addCart(Product:any){  
this.p.getAddPanierProducts(Product);
this.p.getPriceProductsItem(Product);
this.p.getQuantityProducts(Product);
this.router.navigate(["/panier"]); 
  }
 








  

 /*  enter(){
    $("#box2").css("background-color", "white");
        $("i").css("color","black");
  
 } 

 leav(){
  $("#box2").css("background-color", "black");
  $("i").css("color","white");
   
 } */
 

  ngOnInit(){

   /*  $(document).ready(function(){
      $("#box2").hover(function(){
        $("#box2").css("background-color", "white");
        $("i").css("color","black");

        }, function(){
          $("#box2").css("background-color", "black");
          $("i").css("color","white");
      });
    }); */



   /*     console.log(this.Produit.images[0]);
         this.data0.push(this.Produit.images[0]);
         this.data1.push(this.Produit.images[0]);
         console.log(this.Produit.images[0]); */
        /*  $(document).ready(() =>{
          var gf2:any=$(".photo").attr("src");
          this.data0[0];
          $(".product").on({
           
            mouseleave: function(){
             
              console.log(gf2);
              
             
              $(".card").fadeOut(400);
          
            }, 
        
            mouseenter:function(){
           
              var gf1:any=$(".photo").attr("alt");
           console.log(gf1);
           
              
             //  var y:string=$(".photo").attr("alt");
              
              $(".card").fadeIn(400);
              $(".box1").removeAttr("hidden");
              $(".box2").removeAttr("hidden");
            }, 
            
          });
        });
     */

        
  }

    

}




 

