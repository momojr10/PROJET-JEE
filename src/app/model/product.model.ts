import { Images } from "./image.model";

export interface Product{

   ref:number;
   id:string;
   name:string;
   quantite:number;
   price:number;
   description:string;
   categoryname:string;
   images:Images[];
}