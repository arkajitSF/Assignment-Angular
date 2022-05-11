import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  error: (err: any, caught: Observable<any>) => ObservableInput<any>;

  constructor(private http: HttpClient) { 
  }
  apiUrl: string = environment.apiUrl;

  getUsers(): Observable<User[]> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.get(API_URL).pipe(catchError(this.error));
  }

  updateUser(data: any): Observable<User[]> {
    let API_URL = `${this.apiUrl}users/${data.userid}`;
    return this.http.put(API_URL, data).pipe(catchError(this.error));
  }
  deleteUser(data: any): Observable<User[]> {
    let API_URL = `${this.apiUrl}users/${data.userid}`;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }
}
