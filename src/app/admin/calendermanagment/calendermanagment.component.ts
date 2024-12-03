import { Component } from '@angular/core';
interface CalendarEvent {
  date: Date;
  season: string;
  availableHours: number;
  reservedHours: number;
  selected: boolean; // New property to track if the day is selected
}
@Component({
  selector: 'app-calendermanagment',
  templateUrl: './calendermanagment.component.html',
  styleUrl: './calendermanagment.component.css'
})
export class CalendermanagmentComponent {
  currentYear: number;
  selectedDate: Date | null = null; // Track the selected date
  events: CalendarEvent[] = [];
  selectedEvent: CalendarEvent | null = null; // Track the selected event

  constructor() {
    this.currentYear = new Date().getFullYear();
    // Initialize with example events (you can customize this)
    this.initializeEvents();
  }

  private initializeEvents(): void {
    // Example: Initialize events for the whole year
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= this.daysInMonth(month, this.currentYear); day++) {
        const event: CalendarEvent = {
          date: new Date(this.currentYear, month, day),
          season: this.getSeason(month),
          availableHours: 8, // Example: Set available hours
          reservedHours: 0, // Initially no hours reserved
          selected: false // Initialize selected state to false
        };
        this.events.push(event);
      }
    }
  }

  private daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  private getSeason(month: number): string {
    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    return seasons[Math.floor((month % 12) / 3)];
  }

  // Function to select a specific date
  selectDate(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const dateString = inputElement.value;
    this.selectedDate = new Date(dateString);
    // Reset selected event when selecting a new date
    this.selectedEvent = null;
    // Find events for the selected date
    this.findEventsByDate(this.selectedDate);
  }

  // Function to find events for a specific date
  findEventsByDate(date: Date): void {
    this.selectedEvent = this.events.find(event => this.isSameDay(event.date, date)) || null;
  }

  // Function to update reserved hours for the selected day
  updateReservedHours(hours: number): void {
    if (this.selectedEvent) {
      this.selectedEvent.reservedHours = hours;
    }
  }

  // Function to update available hours for the selected day
  updateAvailableHours(hours: number): void {
    if (this.selectedEvent) {
      this.selectedEvent.availableHours = hours;
    }
  }

  // Utility function to check if two dates are on the same day
  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}