import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
 
  Products:any=[];
  PanierQ:any=[];
  TotalPrice?:any ;
  Total?:any ;
  discount:any | undefined;
  signinForm!: FormGroup;
  text!: FormControl;
  un:number| undefined
  select?:number
  prix:any
  message?:any
  Qproduct?:any
 constructor(public cartService: CartService,private fb: FormBuilder, private router:Router) { 
  this.text= fb.control(0,[Validators.required])
  this.signinForm=fb.group({
    text:this.text,  
   })
}
ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.Products=res;   
    //new Set(res)   
    this.TotalPrice=this.cartService.getTotalProducts();
    if (this.discount==undefined) {
      this.Total=this.TotalPrice;
    }
    });
   
    
    //console.log(this.signinForm.value.text); 
  }
  ValiderPanier(){
    alert("Etes vous sur")
    this.message="Votre commande est validé! "
    console.log(this.message);
    this.emptycart();
    //this.router.navigate([""]);
  }
  handleSubmit(){
    this.discount=this.signinForm.value.text;
    this.Total=(this.TotalPrice*this.discount)/100;
    //console.log(this.signinForm.value.text);
  }
  emptycart(){
    this.cartService.removeAllItemCart();
  }
  removeItem(produit:Product){
    this.cartService.removeItemCart(produit)
  }
  
}

