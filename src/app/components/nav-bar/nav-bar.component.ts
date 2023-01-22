import { Component } from '@angular/core';
import * as $ from 'jquery';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  totalItem:number=0
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    $(".dropdown").on({
      mouseenter:function() {
        $(".dropdown-menu").show();
      },
      mouseleave:function(){
        $(".dropdown-menu").hide();
      }
})

this.cartService.getProducts()
.subscribe(data=>{
  this.totalItem=data.length;
})
}
}
