import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  @Input() view_product_child!:any;

  constructor(private product_Service:ProductsService,private router:Router){}
  ngOnInit(): void {
   console.log("hhhhhhhhafafdg",this.view_product_child);

 
   
  }
  onSubmit(){
    this.product_Service.updateProduct(this.view_product_child.ref, this.view_product_child)
    .subscribe(() =>{
      console.log('Product updated')
      location.reload()
    } ,
      (error) => console.log(error)
      
    );
   
  }
  closeModal(){

  }
  
  
}
