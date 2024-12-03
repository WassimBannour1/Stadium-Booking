import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  selectedCountry: string = 'Tunisia'; // Example value, replace with actual data
  bookingDate: string = '2023-07-01'; // Example value, replace with actual data
  bookingTime: string = '15:00'; // Example value, replace with actual data
  stadium: any = {
    name: 'Example Stadium',
    size: '5000 seats'
  }; // Example stadium data
  teamName: string = '';
  playerFullName: string = '';
  playerCIN: string = '';
  playerPhoneNumber: string = '';
  teamPlayers: { fullName: string, cin: string, phoneNumber: string, image: string }[] = [];

  constructor(private router: Router) {}

  addPlayer(): void {
    if (this.playerFullName.trim() !== '' && this.playerCIN.trim() !== '') {
      const phoneNumber = this.getPlayerPhoneNumber(this.playerCIN);
      const image = this.getPlayerImage(this.playerCIN);

      this.teamPlayers.push({
        fullName: this.playerFullName.trim(),
        cin: this.playerCIN.trim(),
        phoneNumber: phoneNumber,
        image: image
      });
      this.playerFullName = '';
      this.playerCIN = '';
    }
  }

  removePlayer(index: number): void {
    this.teamPlayers.splice(index, 1);
  }

  bookStadium(): void {
    console.log('Booking Stadium with the following details:');
    console.log(`Stadium: ${this.stadium.name}`);
    console.log(`Size: ${this.stadium.size}`);
    console.log(`Location: ${this.selectedCountry}`);
    console.log(`Date: ${this.bookingDate}`);
    console.log(`Time: ${this.bookingTime}`);
    console.log(`Team Name: ${this.teamName}`);
    console.log(`Team Players: ${JSON.stringify(this.teamPlayers)}`);
    // Add your booking logic here
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToSearch(): void {
    this.router.navigate(['/search']);
  }

  getPlayerPhoneNumber(cin: string): string {
    // Implement logic to get phone number based on CIN
    return '123-456-7890'; // Example phone number
  }

  getPlayerImage(cin: string): string {
    // Implement logic to get image URL based on CIN
    return '../../assets/player-image.jpg'; // Example image URL
  }
}
