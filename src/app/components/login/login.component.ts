import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/users.service';
import { Authentication } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:user[]=[] ;
  usersSub: Subscription | undefined
  user2: user[]=[] ;
   ar:boolean;

   public isAuthenticated:boolean | undefined;
public userAuthenticated: any;

signinForm:FormGroup ;
username:FormControl ;
password: FormControl ;



constructor(private fb:FormBuilder,private authService:Authentication,private router :Router){
   this.username=fb.control("",[Validators.minLength(4)])
  this.password=fb.control("",[Validators.required,Validators.minLength(4)]) 
  this.ar=false;
  this.signinForm=fb.group({
  email:this.username,
  password:this.password
 })

 



}

public login(username:string,password:string){


  let user;
  console.log("ffffffffffffffffffff");
 
  this.user2.forEach(u=>{
    if(u.name==username&&u.password==password){
         user=u;
    }
  
  });
  
  
  
  if(user){
  
  this.isAuthenticated=true;
  this.userAuthenticated=user;
  
  }
  
  else{
    this.isAuthenticated=false;
    this.userAuthenticated=undefined;
  
  }
  
  
  
  
  
  }

ngOnInit(): void {
  
  /*this.produitService.getAllProducts()
  .subscribe((value:Product[])=>{
    this.Produit=value
   // console.log(this.Produit);
  })*/
/*this.usersSub=this.userService.getAllUsers()
  .subscribe({
    next:(value:User[])=>{
      this.user=value;
       console.log(this.user);
       
    },
    error:(error:any)=>{
      console.log(error);  
    },
    complete:()=>{
      console.log("Completed");


    
      console.log(this.user[0]);
      console.log(this.email.value);
      console.log(this.password.value);
      
      
      
    }
  })
   
*/




  















console.log("fffffffffffffffffffffffffffffffffffffffffffff");

this.usersSub=this.authService.getAllUsers()
.subscribe({
  next:(value:user[])=>{
    this.user2=value;
     console.log(value);
     console.log("lalahodddddddddddddddddddddd");

  },
  error:(error:any)=>{
    console.log(error);  
  },
  complete:()=>{
    //console.log("Completed");

  }
})



}







  
  
  
  
  
  









handleSubmit(){
 
 let y=this.username.value.toString();
 let z=this.password.value.toString();

 this.login(y,z);
  
  if(this.isAuthenticated){
     
    this.router.navigateByUrl('');

  }
}



}
