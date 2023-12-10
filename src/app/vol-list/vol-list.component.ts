// vol-list.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vol-list',
  templateUrl: './vol-list.component.html',
  styleUrls: ['./vol-list.component.css']
})
export class VolListComponent implements OnInit {
  reservations: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Chargez les réservations depuis le local storage lors de l'initialisation du composant
    this.loadReservations();
  }

  loadReservations(): void {
    // Récupérez les réservations depuis le local storage
    const storedReservations = localStorage.getItem('reservations');

    // Vérifiez s'il y a des réservations dans le local storage
    if (storedReservations) {
      // Parsez les réservations depuis la chaîne JSON
      this.reservations = JSON.parse(storedReservations);
    }
  }
}
