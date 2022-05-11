import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  error: (err: any, caught: Observable<any>) => ObservableInput<any>;

  constructor(private http: HttpClient) { }
  apiUrl: string = environment.apiUrl;

  getRoles(): Observable<any> {
    let API_URL = `${this.apiUrl}/roles`;
    return this.http.get(API_URL).pipe(catchError(this.error));
  }
}
