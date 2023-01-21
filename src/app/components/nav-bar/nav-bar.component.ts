import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

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
}
}
