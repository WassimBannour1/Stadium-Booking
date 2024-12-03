import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    currentSection: string = 'myaccount';
    showUserProfile: boolean = false;
  
    user = {
      name: 'User Name',
      email: 'user@example.com'
    };
  
    constructor(public router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects.split('/');
          this.currentSection = url[url.length - 1];
        }
      });
    }
  
    ngOnInit() {
      const currentUrl = this.router.url;
      if (currentUrl === '/user') {
        this.currentSection = 'user';
      }
    }
  
    navigateTo(path: string): void {
      this.router.navigate([`/user/${path}`]);
    }
  
    openUserProfile() {
      this.showUserProfile = !this.showUserProfile;
    }
  
    closeUserProfile() {
      this.showUserProfile = false;
    }
  
    logout() {
      this.router.navigate(['/']);
    }
  }