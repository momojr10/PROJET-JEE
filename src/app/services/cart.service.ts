import { HttpClient } from "@angular/common/http";
import { Injectable, ModuleWithComponentFactories } from "@angular/core";
import { map } from "jquery";
import { BehaviorSubject, count, filter, Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class CartService{
 
private cart:any=[];
private cart_check?:any[];
private recup:any=[]
private count:any;
public productList=new BehaviorSubject<any>([]);
private arraySet?=new Set();
constructor(){ }

 getProducts(){
  return this.productList.asObservable();
}
setProduct(product:any){
  this.cart.push(...product);
  this.productList.next(product);
  this.getTotalProducts();  
}
getPriceProductsItem(produit:any){
  let PrQ=0;
  this.cart.map((a:any)=>{
    if (a.id === produit.id) {
      PrQ=a.price*a.quantity;
      //console.log(a.quantity);
     // console.log(PrQ);  
    }
      //console.log(a); 
  })
  return PrQ;
}
getQuantityProducts(produit: any) {
  let quantity = 0;
  this.cart.map((a: any) => {
    if (a.id === produit.id) {
     // console.log(a.quantity);
     quantity = a.quantity;
        
      //console.log(a.quantity);
      
    }
  });
  return quantity;
}


 getTotalProducts(){
    let Total=0;
    this.cart.map((a:any)=>{
        Total+=a.price*a.quantity;
        //console.log(a);
        
    })
    return Total;

 } 


 getAddPanierProducts(produit: any) {
  let isExisting = false;
  this.cart.map((a: any) => {
    if (a.id === produit.id) {
      a.quantity++;
      //console.log(a.quantity);
      isExisting = true;
    }
  });
  if (!isExisting) {
    produit.quantity = 1;
    this.cart.push(produit);
  }
  this.productList.next(this.cart);
 return produit;
  
}

/*
getPanierProducts(produit: any) {
  if (!this.arraySet.has(produit.id)) {
    this.arraySet.add(produit.id);
    produit.quantity = 1;
    this.cart.push(produit);
  } else {
    this.cart.map((a: any) => {
      if (a.id === produit.id) {
        a.quantity++;
      }
    });
  }
  this.productList.next(this.cart);
}

 /*getPanierProducts(produit:any){
       this.cart.push(produit)
      /* for (let index = 0; index < this.cart.length; index++) {
      //console.log(this.arraySet?.values);
        //if (this.arraySet?.has(this.cart[index].id)===false) {
            this.arraySet?.add(this.cart[index])
          //this.productList.next(this.arraySet);
          //console.log(this.productList);
          //this.getTotalProducts();
       //}
      }
      this.productList.next(this.cart);
      //console.log(this.productList);
      //this.getTotalProducts();
      //this.PannierUnique();
    // return this.arraySet;

 }
 getPanierProducts(produit:any){
   this.cart.push(produit)
   this.productList.next(this.cart);
   this.getTotalProducts();
   console.log(this.productList);

   }
  // PannierUnique(){
    //console.log(this.arraySet);
    //this.productList.next(this.arraySet);
          //console.log(this.productList);
         // this.getTotalProducts();
    
   //}
   */
   removeAllItemCart(){
    this.cart=[];
    this.productList.next(this.cart);
}
removeItemCart(item:any){
   this.cart.map((a:any,index:any)=>{
    console.log(index);
    if(a.id==item.id){
      this.cart.splice(index,1)
    }
    this.productList.next(this.cart);
   })
}
  /* else{
        this.count+=1;
        return this.count;
   }*/
 
}


 //name("Mohamed")
 //name("Mama")