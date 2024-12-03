import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentSection: string = 'myaccount';
  showUserProfile: boolean = false;
  numberOfUsers: number = 150; // Example data
  numberOfStadiums: number = 25; // Example data
  matchesPerDay: number = 10; // Example data

  admin = {
    name: 'Admin Name',
    email: 'admin@example.com'
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
    if (currentUrl === '/admin') {
      this.createMatchesChart(); // Display chart only on /admin page
    }
  }

  createMatchesChart() {
    const ctx = document.getElementById('matchesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Matches per Day',
          data: [5, 7, 6, 8, 10, 12, 9], // Example data
          borderColor: '#09faad',
          backgroundColor: 'rgba(9, 250, 173, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  navigateTo(path: string): void {
    this.router.navigate([`/admin/${path}`]);
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
