import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/User";






@Injectable({providedIn:"root"})

export class UserService{
   
   private baseUrl = 'http://localhost:3000/api/clients';
    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]>{
      return this.http.get<User[]>('http://localhost:3000/Clients') ;
   }

   register(client: User) {
      return this.http.post('http://localhost:3000/clients', client);
      console.log("fgggggg");
    }


    registesr(client: User) {
      return this.http.post('http://localhost:3000/clients', client);
      console.log("fgggggg");
    }
}