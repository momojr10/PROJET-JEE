import { HttpClient } from "@angular/common/http";
import { Injectable, ModuleWithComponentFactories } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class ProductsService{
  static getPanierProducts(produit: any) {
    throw new Error('Method not implemented.');
  }

private listproduct:string="http://localhost:3000/Products";   
private listparcategory?:string;
private cart:any
private listcat:any
private totalproduct:number=0
constructor(private http:HttpClient){
}
getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.listproduct)
 }

 getbyCatProducts(Name:any): Observable<Product[]>{
    this.listparcategory='http://localhost:3000/Products?category='+Name+'';
    return this.http.get<Product[]>(this.listparcategory)
 }
 getTotalProducts(){

 }
 getPanierProducts(produit:any){
   this.cart.push(produit)
   console.log(this.cart);
 }
}
var Moi:string[]=[]
function name(params:string) {
   Moi.push(params)
   console.log(Moi); 
 }
 //name("Mohamed")
 //name("Mama")