import { Component } from '@angular/core';
interface Reservation {
  stadium: string;
  date: string;
  time: string;
  location: string;
  details: string;
}
@Component({
  selector: 'app-reservationmanagment',
  templateUrl: './reservationmanagment.component.html',
  styleUrl: './reservationmanagment.component.css'
})
export class ReservationmanagmentComponent {
  reservations: Reservation[] = [
    { stadium: 'Stadium 1', date: '2024-07-10', time: '10:00', location: 'Location 1', details: 'Reservation details for Stadium 1 on 2024-07-10 at 10:00.' },
    { stadium: 'Stadium 2', date: '2024-07-11', time: '12:00', location: 'Location 2', details: 'Reservation details for Stadium 2 on 2024-07-11 at 12:00.' },
    { stadium: 'Stadium 3', date: '2024-07-12', time: '14:00', location: 'Location 3', details: 'Reservation details for Stadium 3 on 2024-07-12 at 14:00.' },
    { stadium: 'Stadium 4', date: '2024-07-13', time: '16:00', location: 'Location 4', details: 'Reservation details for Stadium 4 on 2024-07-13 at 16:00.' },
    { stadium: 'Stadium 5', date: '2024-07-14', time: '18:00', location: 'Location 5', details: 'Reservation details for Stadium 5 on 2024-07-14 at 18:00.' }
  ];
  selectedReservation: Reservation | null = null;
  searchDate: string = '';
  searchTime: string = '';
  searchLocation: string = '';
  newStadium: string = '';
  newDate: string = '';
  newTime: string = '';
  newLocation: string = '';
  newDetails: string = '';

  constructor() { }

  ngOnInit(): void { }

  onSearch(): void {
    this.selectedReservation = this.reservations.find(reservation =>
      reservation.date === this.searchDate &&
      reservation.time === this.searchTime &&
      reservation.location === this.searchLocation
    ) || null;

    if (this.selectedReservation) {
      this.newStadium = this.selectedReservation.stadium;
      this.newDate = this.selectedReservation.date;
      this.newTime = this.selectedReservation.time;
      this.newLocation = this.selectedReservation.location;
      this.newDetails = this.selectedReservation.details;
    }
  }

  onSave(): void {
    if (this.selectedReservation) {
      this.selectedReservation.stadium = this.newStadium;
      this.selectedReservation.date = this.newDate;
      this.selectedReservation.time = this.newTime;
      this.selectedReservation.location = this.newLocation;
      this.selectedReservation.details = this.newDetails;
    }
  }
}