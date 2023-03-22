import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../model/user.model";






@Injectable({providedIn:"root"})

export class UserService{

  //  private listuser:string="http://localhost:8080/users";   
   
   
    constructor(private http: HttpClient) { }

  /*  getAllProducts():Observable<user[]>{
        return this.http.get<any>(this.listuser);
      }*/
      

}