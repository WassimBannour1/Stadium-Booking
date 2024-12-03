import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showModal: boolean = false;
  modalMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  navigateToSignUpPage(): void {
    this.router.navigate(['/signup']); // Navigate to the sign-up route
  }

  onSubmit(): void {
    this.http.post<any>('http://localhost/stadiumbooking/login.php', {
      email: this.email,
      password: this.password
    }).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/user']); // Navigate to the user page on success
      } else {
        this.modalMessage = response.message; // Display error message
        this.showModal = true;
      }
    }, error => {
      this.modalMessage = 'An error occurred. Please try again later.';
      this.showModal = true;
    });
  }

  closeModal(): void {
    this.showModal = false;
  }
}