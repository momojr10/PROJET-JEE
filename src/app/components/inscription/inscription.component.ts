import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {


  user: User={
    name:'',
    lastName:'',
    password: '',
  };
  signinForm:FormGroup ;
  email:FormControl ;
  password: FormControl ;
  name: FormControl ;
  lastname: FormControl ;
  constructor(private fb:FormBuilder,private userService:UserService,private http: HttpClient){
    this.email=fb.control("")
    this.password=fb.control("") 
    this.name=fb.control("") 
    this.lastname=fb.control("") 
    
     
    this.signinForm=fb.group({
      email:this.email,
      password:this.password,
      name:this.name,
      lastname:this.lastname

     })
     
     }
     onSubmit(){
     
     
      this.user.password=this.password.value;
      this.user.lastName=this.lastname.value;
      this.user.name=this.name.value;

     }
   
  
  }
  
