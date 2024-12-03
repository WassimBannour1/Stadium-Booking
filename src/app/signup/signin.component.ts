import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service'; // Correctly import SignupService
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user = {
    fullName: '',
    cin: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    securityQuestion: '',
    securityAnswer: ''
  };
  
  showModal: boolean = false; // To control the visibility of the modal

  constructor(private router: Router, private signupService: SignupService) { }

  navigateToSignInPage(): void {
    this.router.navigate(['/signin']); // Navigate to the sign-in route
  }

  navigateToHomePage(): void {
    this.router.navigate(['/']); // Navigate to the home route
  }

  onSubmit(): void {
    if (this.user.password === this.user.confirmPassword) {
      this.signupService.signup(this.user).subscribe((response: any) => { // Explicitly define the type of response
        console.log(response);
        this.showModal = true; // Show the success modal
      });
    } else {
      // Handle password mismatch
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}