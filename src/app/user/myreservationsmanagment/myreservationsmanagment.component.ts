import { Component } from '@angular/core';

@Component({
  selector: 'app-myreservationsmanagment',
  templateUrl: './myreservationsmanagment.component.html',
  styleUrl: './myreservationsmanagment.component.css'
})
export class MyreservationsmanagmentComponent {
  searchDate: string = '';
  searchTime: string = '';
  searchLocation: string = '';
  reservations: any[] = [];
  selectedReservation: any = null;

  exampleReservations = [
    {
      stadium: 'Stadium A',
      date: '2023-08-01',
      time: '10:00',
      location: 'Location A',
      myTeam: {
        name: 'My Team',
        players: ['Player 1', 'Player 2', 'Player 3']
      },
      opponentTeam: {
        name: 'Opponent Team',
        players: ['Opponent 1', 'Opponent 2', 'Opponent 3']
      }
    },
    {
      stadium: 'Stadium B',
      date: '2023-08-02',
      time: '12:00',
      location: 'Location B',
      myTeam: {
        name: 'My Team B',
        players: ['Player 4', 'Player 5', 'Player 6']
      },
      opponentTeam: {
        name: 'Opponent Team B',
        players: ['Opponent 4', 'Opponent 5', 'Opponent 6']
      }
    },
    {
      stadium: 'Stadium C',
      date: '2023-08-03',
      time: '14:00',
      location: 'Location C',
      myTeam: {
        name: 'My Team C',
        players: ['Player 7', 'Player 8', 'Player 9']
      },
      opponentTeam: {
        name: 'Opponent Team C',
        players: ['Opponent 7', 'Opponent 8', 'Opponent 9']
      }
    },
    {
      stadium: 'Stadium D',
      date: '2023-08-04',
      time: '16:00',
      location: 'Location D',
      myTeam: {
        name: 'My Team D',
        players: ['Player 10', 'Player 11', 'Player 12']
      },
      opponentTeam: {
        name: 'Opponent Team D',
        players: ['Opponent 10', 'Opponent 11', 'Opponent 12']
      }
    },
    {
      stadium: 'Stadium E',
      date: '2023-08-05',
      time: '18:00',
      location: 'Location E',
      myTeam: {
        name: 'My Team E',
        players: ['Player 13', 'Player 14', 'Player 15']
      },
      opponentTeam: {
        name: 'Opponent Team E',
        players: ['Opponent 13', 'Opponent 14', 'Opponent 15']
      }
    }
  ];

  onSearch() {
    this.reservations = this.exampleReservations.filter(reservation =>
      (!this.searchDate || reservation.date === this.searchDate) &&
      (!this.searchTime || reservation.time === this.searchTime) &&
      (!this.searchLocation || reservation.location.toLowerCase().includes(this.searchLocation.toLowerCase()))
    );
  }

  onSelectReservation(reservation: any) {
    this.selectedReservation = { ...reservation };
  }

  onUpdateReservation() {
    const index = this.exampleReservations.findIndex(reservation =>
      reservation.date === this.selectedReservation.date &&
      reservation.time === this.selectedReservation.time &&
      reservation.location === this.selectedReservation.location
    );
    if (index !== -1) {
      this.exampleReservations[index] = { ...this.selectedReservation };
    }
    this.selectedReservation = null;
    this.onSearch();
  }
}