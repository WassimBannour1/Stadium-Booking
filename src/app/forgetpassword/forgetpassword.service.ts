import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = 'http://localhost/stadiumbooking/forgetpassword.php'; // Update with your local server path

  constructor(private http: HttpClient) { }

  checkCIN(cin: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkcin`, { cin });
  }

  verifyAnswerAndUpdatePassword(cin: string, answer: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verifyanswer`, { cin, answer, newPassword });
  }
}
