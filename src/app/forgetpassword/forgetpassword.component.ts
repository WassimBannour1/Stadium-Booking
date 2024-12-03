import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  cin: string = '';
  securityQuestion: string = '';
  answer: string = '';
  newPassword: string = '';
  cinVerified: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  navigateToSignInPage(): void {
    this.router.navigate(['/signin']); // Navigate to the sign-in route
  }

  verifyCin(): void {
    const payload = { cin: this.cin, action: 'verifyCin' };
    this.http.post<any>('http://localhost/stadiumbooking/forgetpassword.php', payload).subscribe(
      response => {
        if (response.success) {
          this.securityQuestion = response.security_question;
          this.cinVerified = true;
        } else {
          alert(response.message);
        }
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.cinVerified) {
      alert('Please verify your CIN first.');
      return;
    }

    const payload = {
      cin: this.cin,
      action: 'resetPassword',
      answer: this.answer,
      new_password: this.newPassword
    };

    this.http.post<any>('http://localhost/stadiumbooking/forgetpassword.php', payload).subscribe(
      response => {
        if (response.success) {
          alert(response.message);
          this.router.navigate(['/signin']);
        } else {
          alert(response.message);
        }
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
