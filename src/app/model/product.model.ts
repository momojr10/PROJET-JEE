import { Images } from "./image.model";

export interface Product{

   id:number;
   name:string;
   quantite:number;
   price:number;
   description:string;
   categoryname:string;
   images:Images[];
}