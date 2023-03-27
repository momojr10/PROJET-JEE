import { BuiltinType } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  listproduct_parcat:Product[]=[];
  catsSub: Subscription | undefined;
  tableau:any[]=[];
  Momo:String="";
  i:any;
  j:any;
  k:any;
  l:any;


  constructor(private produitService:ProductsService,private route:ActivatedRoute,private router:Router){}
    
  
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
    }) 
 
   this.productsSub=this.produitService.getbyCatProducts("Manteaux")
    .subscribe({
      next:(value:Product[])=>{

        this.Produit=value

        

        console.log("hheeeee",this.Produit);


      },
      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        //console.log("Completed");
  
      }
    }) 

    
*/

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
  this.router.events.subscribe((val)=>{
    if(val instanceof NavigationEnd){
      let url=val.url;
      console.log("url",url);
      console.log("momo");
      let p1=this.route.snapshot.params['name'];
 // console.log("mom",p1);

//console.log("hhh"+this.route.snapshot.params['id']);
if(p1=="produit"){

  this.productsSub=this.produitService.getAllProducts().subscribe(
    {
      next:(value:Product[])=>{
        this.Products=value
        //console.log("hhhh"+this.Products);
        
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
      this.listproduct_parcat=[];
      },
      error:(error:any)=>{
        console.log(error);  
      },
      complete:()=>{
        //console.log("Completed");
        
      } 
    }
  ) 


}
else{
let cat_name=this.route.snapshot.params['name'];

this.catsSub=this.produitService.getbyCatProducts(cat_name)
.subscribe({
  next:(value:Product[])=>{
    this.listproduct_parcat=value
    console.log("ggg",this.listproduct_parcat);
    this.RandProduct=this.RandProduct2=[];

  },
  error:(error:any)=>{
    console.log(error);  
  },
  complete:()=>{
    //console.log("Completed");
  }
}) 
}



  /*   
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

 */
   






     
     
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
