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

client: User={
  name:'',
  lastName:'',
  password: '',
};



constructor(private fb:FormBuilder,private userService:UserService){
   this.email=fb.control("",[Validators.minLength(3)])
  this.password=fb.control("",[Validators.required,Validators.minLength(3)]) 
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
this.usersSub=this.userService.getAllusers()
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

  this.client.name=this.email.value;
  this.client.password=this.password.value;
  console.log(this.client.name);
  console.log(this.client.password);
 


  
  this.userService.login(this.client).subscribe(resp=>{


    let jwt=resp.headers.get('Authorization');  
    console.log(jwt);
    this.userService.saveToken(jwt);
  
  },err=>{



  })
 



}

}