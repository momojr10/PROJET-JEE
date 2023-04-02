import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {



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
     
      const customer = {
        firstName: this.name.value,
        lastName: this.lastname.value,
        email: this.email.value,
        password:this.password.value
      };
  
      this.http.post('http://localhost:3000/clients', customer)
        .subscribe(response => {
          console.log('Customer registered successfully');
        }, error => {
          console.log('Error while registering customer');
        });
    }
    
  
  }
  

