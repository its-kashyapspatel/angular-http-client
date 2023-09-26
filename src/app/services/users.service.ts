import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private apiUrl: string = 'https://nodejs-users-2.vercel.app/users';
  
  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
  
  updateUser(userId: string, updatedUser: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, updatedUser);
  }
  
  deleteUser(userId: string): Observable<void> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
  
}
