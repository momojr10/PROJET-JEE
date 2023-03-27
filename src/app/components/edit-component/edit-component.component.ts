import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  @Input() view_product_child!:any;
  constructor(){}
  ngOnInit(): void {
   console.log("hhhhhhhhafafdg",this.view_product_child);
   
  }
  
  
}
