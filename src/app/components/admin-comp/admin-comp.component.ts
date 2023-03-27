import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-comp',
  templateUrl: './admin-comp.component.html',
  styleUrls: ['./admin-comp.component.css']
})
export class AdminCompComponent implements OnInit{

  isSuccess:boolean=false 
  List_Product_cat:Product[]=[]
  view_product:Product[]=[]
  momo:Product[]=[]
  Form_send_mt!:FormGroup;
  motcle!: FormControl;
  name_cate!:string;
  constructor(private Product_service:ProductsService,private fb:FormBuilder, private route:ActivatedRoute,private router:Router){
    this.motcle= fb.control(0,[Validators.required])
    this.Form_send_mt=fb.group({
      motcle:this.motcle,  
     })
  }
  HandleDisplayEditViewModal(id:any){
   
      this.Product_service.getProduct(id)
      .subscribe((value:Product[])=>{
          this.view_product=value
          //console.log(this.view_product);
      })
      this.isSuccess=true
      
     
      
     
    
}
  handleSubmit(){
    
    this.name_cate=this.Form_send_mt.value.motcle;
    console.log(this.name_cate);
    localStorage.setItem('motcle', this.name_cate);
    this.getCat()
    this.supprimer()
  }
 
  ngOnInit(): void {
    const savedMotcle = localStorage.getItem('motcle');
  if (savedMotcle) {
    this.Form_send_mt.patchValue({motcle: savedMotcle});
  }
 
  }

  delete_product(c:any){
    this.router.navigateByUrl('admin/'+c.ref);
  }
     
  
  getCat(){
    this.Product_service.getbyCatProducts(this.name_cate)
    .subscribe((value:Product[])=>{
          this.List_Product_cat=value;
          console.log("momo",this.List_Product_cat);     
    });  
    //this.supprimer()
  }
  supprimer(){  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        const id = this.route.snapshot.params['id'];
        if (id!=0) {
          console.log(`Suppression du produit avec l'ID ${id}`);
          this.Product_service.deleteproduct(id).subscribe(() => {
            console.log(`Produit avec l'ID ${id} supprimé`);
            this.router.navigateByUrl('admin/0');
            //localStorage.removeItem('motcle');
            this.getCat()
                //location.reload();
            
          });
        }
      }
    });
  }
}

