import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost/stadiumbooking/signup.php'; // Update with your local server path

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
