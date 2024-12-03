import { Component } from '@angular/core';

@Component({
  selector: 'app-playersmanagement',
  templateUrl: './playersmanagement.component.html',
  styleUrl: './playersmanagement.component.css'
})
export class PlayersmanagementComponent {
  searchDate: string = '';
  searchTime: string = '';
  searchLocation: string = '';
  reservations: any[] = [];
  selectedReservation: any = null;
  newPlayer: string = '';
  newPosition: string = '';

  exampleReservations = [
    {
      stadium: 'Stadium A',
      date: '2023-08-01',
      time: '10:00',
      location: 'Location A',
      myTeam: {
        name: 'My Team',
        players: [
          { name: 'Player 1', position: 'Forward' },
          { name: 'Player 2', position: 'Midfielder' },
          { name: 'Player 3', position: 'Defender' }
        ]
      },
      opponentTeam: {
        name: 'Opponent Team',
        players: [
          { name: 'Opponent 1', position: 'Forward' },
          { name: 'Opponent 2', position: 'Midfielder' },
          { name: 'Opponent 3', position: 'Defender' }
        ]
      }
    },
    // Add more example reservations here...
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

  addPlayer() {
    if (this.newPlayer && this.newPosition) {
      this.selectedReservation.myTeam.players.push({ name: this.newPlayer, position: this.newPosition });
      this.newPlayer = '';
      this.newPosition = '';
    }
  }

  removePlayer(index: number) {
    this.selectedReservation.myTeam.players.splice(index, 1);
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
