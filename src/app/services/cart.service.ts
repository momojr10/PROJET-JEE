import { HttpClient } from "@angular/common/http";
import { Injectable, ModuleWithComponentFactories } from "@angular/core";
import { BehaviorSubject, count, Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class CartService{
 
private cart:any=[];
private count:any;
public productList=new BehaviorSubject<any>([]);
constructor(){ }

 getProducts(){
  return this.productList.asObservable();
}
setProduct(product:any){
  this.cart.push(...product);
  this.productList.next(product);
  this.getTotalProducts();  
}

 getTotalProducts(){
    let Total=0;
    this.cart.map((a:any)=>{
        Total+=a.price;
       // console.log(Total);
        
    })
    return Total;
 }
 getPanierProducts(produit:any){
   
    
   this.cart.push(produit)
   this.productList.next(this.cart);
   this.getTotalProducts();
   console.log(this.productList);
   
   }
  /* else{
        this.count+=1;
        return this.count;
   }*/
 
}

 //name("Mohamed")
 //name("Mama")