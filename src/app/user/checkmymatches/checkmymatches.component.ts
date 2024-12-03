
import { Component, OnInit } from '@angular/core';

interface Match {
  stadium: string;
  date: string;
  time: string;
  myTeam: {
    name: string;
    players: string[];
  };
  opponentTeam: {
    name: string;
    players: string[];
  };
}

@Component({
  selector: 'app-checkmymatches',
  templateUrl: './checkmymatches.component.html',
  styleUrl: './checkmymatches.component.css'
})
export class CheckmymatchesComponent {
  matches: Match[] = [];
  searchDate: string = '';
  searchTime: string = '';

  ngOnInit() {
    this.matches = this.getMatches();
  }

  onSearchDate(event: Event): void {
    this.searchDate = (event.target as HTMLInputElement).value;
  }

  onSearchTime(event: Event): void {
    this.searchTime = (event.target as HTMLInputElement).value;
  }

  onSearch(): void {
    // Filter matches based on the search criteria
    this.matches = this.getMatches().filter(match =>
      match.date === this.searchDate && match.time === this.searchTime
    );
  }

  getMatches(): Match[] {
    return [
      {
        stadium: 'Stadium A',
        date: '2024-07-17',
        time: '10:00',
        myTeam: {
          name: 'My Team',
          players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5']
        },
        opponentTeam: {
          name: 'Team X',
          players: ['Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4', 'Opponent 5']
        }
      },
      {
        stadium: 'Stadium B',
        date: '2024-07-18',
        time: '14:00',
        myTeam: {
          name: 'My Team',
          players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5']
        },
        opponentTeam: {
          name: 'Team Y',
          players: ['Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4', 'Opponent 5']
        }
      }
    ];
  }
}


