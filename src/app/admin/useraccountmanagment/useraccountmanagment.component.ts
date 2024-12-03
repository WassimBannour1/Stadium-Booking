import { Component, OnInit } from '@angular/core';

interface User {
  fullName: string;
  CIN: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  securityQuestion: string;
  answer: string;
  photoUrl: string;
}

@Component({
  selector: 'app-usermanagement',
 templateUrl: './useraccountmanagment.component.html', styleUrl: './useraccountmanagment.component.css'
})
export class UseraccountmanagmentComponent implements OnInit {
  users: User[] = [
    { fullName: 'User 1', CIN: '123456', email: 'user1@example.com', password: '', confirmPassword: '', phoneNumber: '1234567890', securityQuestion: 'Your first pet?', answer: 'Dog', photoUrl: '../../../assets/users/me.jpg' },
    { fullName: 'User 2', CIN: '789012', email: 'user2@example.com', password: '', confirmPassword: '', phoneNumber: '0987654321', securityQuestion: 'Your birthplace?', answer: 'City', photoUrl: 'assets/user2.jpg' }
  ];
  selectedUser: User | null = null;
  newFullName: string = '';
  newCIN: string = '';
  newEmail: string = '';
  newPassword: string = '';
  newConfirmPassword: string = '';
  newPhoneNumber: string = '';
  newSecurityQuestion: string = '';
  newAnswer: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.users = this.users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm)
    );
  }

  onSelectUser(user: User): void {
    this.selectedUser = user;
    this.newFullName = user.fullName;
    this.newCIN = user.CIN;
    this.newEmail = user.email;
    this.newPassword = user.password;
    this.newConfirmPassword = user.confirmPassword;
    this.newPhoneNumber = user.phoneNumber;
    this.newSecurityQuestion = user.securityQuestion;
    this.newAnswer = user.answer;
  }

  onSave(): void {
    if (this.selectedUser) {
      this.selectedUser.fullName = this.newFullName;
      this.selectedUser.CIN = this.newCIN;
      this.selectedUser.email = this.newEmail;
      this.selectedUser.password = this.newPassword;
      this.selectedUser.confirmPassword = this.newConfirmPassword;
      this.selectedUser.phoneNumber = this.newPhoneNumber;
      this.selectedUser.securityQuestion = this.newSecurityQuestion;
      this.selectedUser.answer = this.newAnswer;
    }
  }
}
