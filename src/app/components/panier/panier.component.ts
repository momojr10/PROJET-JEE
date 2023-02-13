import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
 
  Products:any=[]
  TotalPrice?:any ;
  Total?:any ;
  discount:any | undefined;
  signinForm!: FormGroup;
  text!: FormControl;
  un:number| undefined
  select?:number
  prix:any
  
 constructor(private cartService: CartService,private fb: FormBuilder) { 
  this.text= fb.control(0,[Validators.required])
  this.signinForm=fb.group({
    text:this.text
   })
}
ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
    this.Products=res;      
    this.TotalPrice=this.cartService.getTotalProducts();
    if (this.discount==undefined) {
      this.Total=this.TotalPrice;
    }
    
    });
    
  }

  handleSubmit(){
    this.discount=this.signinForm.value.text;
    this.Total=(this.TotalPrice*this.discount)/100;
    //console.log(this.signinForm.value.text);
    
  }
  emptycart(){
  
  }
  removeItem(produit:Product){

  }
  
}

