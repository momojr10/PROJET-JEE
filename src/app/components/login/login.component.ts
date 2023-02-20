import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User[]=[] ;
  usersSub: Subscription | undefined
  user2: User[]=[] ;
   ar:boolean;

signinForm:FormGroup ;
email:FormControl ;
password: FormControl ;



constructor(private fb:FormBuilder,private userService:UserService){
   this.email=fb.control("",[Validators.email,Validators.minLength(6)])
  this.password=fb.control("",[Validators.required,Validators.minLength(6)]) 
  this.ar=false;
  this.signinForm=fb.group({
  email:this.email,
  password:this.password
 })

 



}

ngOnInit(): void {
  
  /*this.produitService.getAllProducts()
  .subscribe((value:Product[])=>{
    this.Produit=value
   // console.log(this.Produit);
  })*/
this.usersSub=this.userService.getAllUsers()
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
   




}
















handleSubmit(){
 
 let i=0;
 
 let y=this.email.value.toString();
 let z=this.password.value.toString();

 console.log(y);
 console.log(z);
 

 for (let x=0;x<this.user.length;x++) {
    

       if(this.user[x].email==y &&z==this.user[x].password){
                     
                  i++;
        }           
        
  };

  if(i==0){
    this.ar=true;
  }
  else{
    this.ar=false;
  }

  console.log(i);
  
  
}



}
