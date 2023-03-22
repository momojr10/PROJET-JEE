import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { user } from "../model/user.model";



@Injectable({providedIn:"root"})

export class Authentication{


private users=[
    {username:'admin',password:'1234',roles:['ADMIN','USER']},
    {username:'user1',password:'1234',roles:['USER']},
    {username:'user2',password:'1234',roles:['USER']}
]

usersSub: Subscription | undefined

users1:user[]=[] ;
private listuser:string="http://localhost:8080/users";   


public isAuthenticated:boolean | undefined;
public userAuthenticated: any;


constructor(private http: HttpClient){
 
}


getAllUsers():Observable<any>{
  return this.http.get<any>(this.listuser);
}



/**
 * l
 */









public login(username:string,password:string){


let user;
console.log("ffffffffffffffffffff");
console.log(this.users1);
this.users.forEach(u=>{
  if(u.username==username&&u.password==password){
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













}









