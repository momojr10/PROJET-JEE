import { HttpClient, HttpHeaders } from "@angular/common/http";
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



 
private listproduct2:string="http://localhost:8080/produit";   

private listproduct:string="http://localhost:8080/produit";   

private delete_prod:string="http://localhost:8080/delete";  

private listparcategory!:string;
private viewproduit!:string;
private listcat:any
private delete:any
constructor(private http:HttpClient){
  
}
getAllProducts():Observable<Product[]>{
    return this.http.get<any>(this.listproduct);
 }
 getAllCategory():Observable<Category[]>{
  return this.http.get<any>(this.url_cat);
 }

 getRandomProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(this.listproduct2) 
 }

 updateProduct(ref: number, produit: Product) {
  const url = 'http://localhost:8080/edit_product/'+ref+'';
  const body = JSON.stringify(produit);
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.post(url, body, { headers });
}





deleteproduct(id:number):Observable<any>{
     //return this.http.get(this.delete_prod+'/'+id)
     return this.http.get(this.delete_prod+'/'+id)
}
getProduct(id:number): Observable<Product[]>{
  this.viewproduit='http://localhost:8080/view_product/'+id+'';
  return this.http.get<Product[]>(this.viewproduit)
}

 getbyCatProducts(Name:any): Observable<Product[]>{
    this.listparcategory='http://localhost:8080/produit/'+Name+'';
    return this.http.get<Product[]>(this.listparcategory)
 }
 public getResource(url: string){
  return this.http.get(url);
}
}
var Moi:string[]=[]
function name(params:string) {
   Moi.push(params)
   console.log(Moi); 
 }
 //name("Mohamed")
 //name("Mama")

				