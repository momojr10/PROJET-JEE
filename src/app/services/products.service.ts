import { HttpClient } from "@angular/common/http";
import { Injectable, ModuleWithComponentFactories } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class ProductsService{
  static getPanierProducts(produit: any) {
    throw new Error('Method not implemented.');
  }

private listproduct:string="http://localhost:8080/produit";   
private listparcategory?:string;
private listcat:any
constructor(private http:HttpClient){
  
}
getAllProducts():Observable<Product[]>{
    return this.http.get<any>(this.listproduct);
 }

 getbyCatProducts(Name:any): Observable<Product[]>{
    this.listparcategory='http://localhost:3000/Products?category='+Name+'';
    return this.http.get<Product[]>(this.listparcategory)
 }
}

 //name("Mohamed")
 //name("Mama")