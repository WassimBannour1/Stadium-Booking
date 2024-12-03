import { Component, OnInit } from '@angular/core';

interface Stadium {
  name: string;
  location: string;
  size: string;
  price: number;
  photoUrl: string; // Added photoUrl property
}

@Component({
  selector: 'app-stadiummanagment',
  templateUrl: './stadiummanagment.component.html',
  styleUrls: ['./stadiummanagment.component.css']
})
export class StadiummanagmentComponent implements OnInit {
  stadiums: Stadium[] = [
    { name: 'Stadium 1', location: 'Location 1', size: 'Large', price: 100, photoUrl: '../../../assets/backgrounds/booking-background.jpg' },
    { name: 'Stadium 2', location: 'Location 2', size: 'Medium', price: 80, photoUrl: '../../../assets/backgrounds/home-background-1.jpg' }
  ];
  selectedStadium: Stadium | null = null;
  newName: string = '';
  newLocation: string = '';
  newSize: string = '';
  newPrice: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.stadiums = this.stadiums.filter(stadium =>
      stadium.name.toLowerCase().includes(searchTerm)
    );
  }

  onSelectStadium(stadium: Stadium): void {
    this.selectedStadium = stadium;
    this.newName = stadium.name;
    this.newLocation = stadium.location;
    this.newSize = stadium.size;
    this.newPrice = stadium.price;
  }

  onSave(): void {
    if (this.selectedStadium) {
      this.selectedStadium.name = this.newName;
      this.selectedStadium.location = this.newLocation;
      this.selectedStadium.size = this.newSize;
      this.selectedStadium.price = this.newPrice;
    }
  }
}
