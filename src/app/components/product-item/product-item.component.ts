import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {



}




$(document).ready(function(){
  $(".product").on({
   
    mouseleave: function(){
      $(".photo").attr("src","/assets/Image_Amoza/Pantalons/j4.jpg.jpg");
     
      $(".card").fadeOut(400);
  
    }, 

    mouseenter: function(){
      
      $(".photo").attr("src","/assets/Image_Amoza/Pantalons/j44.jpg.jpg");
      $(".card").fadeIn(400);
      $(".box1").removeAttr("hidden");
      $(".box2").removeAttr("hidden");
    }, 
    
  });
});

