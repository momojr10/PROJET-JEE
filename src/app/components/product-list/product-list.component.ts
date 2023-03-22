import { BuiltinType } from '@angular/compiler';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Produit:Product[]=[] ;
  Products:Product[]=[] ;
  products:any
  RandProduct:Product[]=[] ;
  RandProduct2:Product[]=[] ;
  productsSub: Subscription | undefined
  ProduitCate:Product[]=[] ;

  tableau:any[]=[];
  Momo:String="";
  i:any;
  j:any;
  k:any;
  l:any;


  constructor(private produitService:ProductsService){}
    
  
  ngOnInit(): void {
  
    function existsInArray(number: any, array: string | any[]) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
          return true;
        }
      }
      return false;
    }

    /*this.produitService.getAllProducts().subscribe(
      data=>{
        this.products=data
        console.log(this.products)
      }
    )*/


/*     this.produitService.getAllProducts()
    .subscribe((value:Product[])=>{
      this.Produit=value
      console.log(this.Produit);
    }) */
 
/*   this.productsSub=this.produitService.getbyCatProducts("Manteau")
    .subscribe({
      next:(value:Product[])=>{
        

        //console.log(this.Produit[0]);

         for(this.i=0;this.i<4;this.i++){
          
          this.RandProduct[this.i]=this.Produit[this.i];
               
              
        }
        console.log(this.RandProduct); 
        

      },
      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        //console.log("Completed");
  
      }
    }) */

    


    $("#img1").hover(function(){
      $("#button1").css("visibility","visible");
      

      }, function(){
        $("#button1").css("visibility","hidden");
       
    });

    $("#img2").hover(function(){
      $("#button2").css("visibility","visible");
    }, function(){
      $("#button2").css("visibility","hidden");
  });

    this.productsSub=this.produitService.getAllProducts().subscribe(
      {
        next:(value:Product[])=>{
          this.Products=value
          console.log("hhhh"+this.Products);
          
         for(this.i=0;this.i<8;this.i++){
          this.j=Math.floor(Math.random()*78);
           
                
          while(existsInArray(this.j,this.tableau)) {
                  
            this.j=Math.floor(Math.random()*78);
          } 

          this.tableau.push(this.j);

          this.RandProduct[this.i]=this.Products[this.j];    
        } 

        for(this.k=0;this.k<6;this.k++){
          this.l=Math.floor(Math.random()*78);
              
          while(existsInArray(this.l,this.tableau)) {
                  
            this.l=Math.floor(Math.random()*78);
          } 

          this.tableau.push(this.l);

          this.RandProduct2[this.k]=this.Products[this.l];    
        }
       
        },
        error:(error:any)=>{
          console.log(error);  
        },
        complete:()=>{
          console.log("Completed");
          
        } 
      }
    ) 



    
    this.productsSub=this.produitService.getRandomProducts()
    .subscribe({
      next:(value:Product[])=>{
         console.log(value);
         console.log("lalaholllllllllllllllllllllllllllllll");

      },
      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        //console.log("Completed");
  
      }
    })


   






     
 


  }


 
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
    
  }
 
 /*  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }
  */
  
  }
