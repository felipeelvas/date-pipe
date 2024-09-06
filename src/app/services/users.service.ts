import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserResponse } from "../interfaces/user-response.interface";
import { UsesListResponse } from "../types/users-list-response.type";

@Injectable({
  providedIn: 'root',
})

export class UsersService {
 constructor(
  private readonly _http: HttpClient
 ){}
 getUsers(): Observable<UsesListResponse> {
  return this._http.get<UsesListResponse>('https://jsonplaceholder.typicode.com/users');
 }

 getUserById(userId: number):Observable<IUserResponse> {
  return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
 }
}



