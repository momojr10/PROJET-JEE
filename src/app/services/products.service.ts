import { HttpClient } from "@angular/common/http";
import { Injectable, ModuleWithComponentFactories } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Category } from "../model/category.model";
import { Product } from "../model/product.model";

@Injectable({providedIn:"root"})

export class ProductsService{
  static getPanierProducts(produit: any) {
    throw new Error('Method not implemented.');
  }
private url_cat:string="http://localhost:8080/category";
private listproduct:string="http://localhost:8080/produit";   
private listparcategory?:string;
private listcat:any
constructor(private http:HttpClient){
  
}
getAllProducts():Observable<Product[]>{
    return this.http.get<any>(this.listproduct);
 }
 getAllCategory():Observable<Category[]>{
  return this.http.get<any>(this.url_cat);
 }

 getbyCatProducts(Name:any): Observable<Product[]>{
    this.listparcategory='http://localhost:8080/produit/'+Name+'';
    return this.http.get<Product[]>(this.listparcategory)
 }
 public getResource(url: string){
  return this.http.get(url);
}
}

 //name("Mohamed")
 //name("Mama")

				