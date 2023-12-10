// reservation.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  clientName: string = '';
  passportNumber: string = '';
  airports: string[] = ['Aéroport 1', 'Aéroport 2', 'Aéroport 3']; // Remplacez par vos aéroports réels
  selectedSource: string = '';
  selectedDestination: string = '';
  reservations: any[] = [];

  constructor(private router: Router) {}

  onSubmit(): void {
    const reservation = {
      clientName: this.clientName,
      passportNumber: this.passportNumber,
      source: this.selectedSource,
      destination: this.selectedDestination
    };

    // Stockez la réservation dans le local storage
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));

    // Réinitialisez les champs du formulaire
    this.clientName = '';
    this.passportNumber = '';
    this.selectedSource = '';
    this.selectedDestination = '';
  }
}
