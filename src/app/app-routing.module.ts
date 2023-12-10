import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VolListComponent} from "./vol-list/vol-list.component";
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [
  { path: '', redirectTo: '/vols', pathMatch: 'full' },
  { path: 'vols', component: VolListComponent },
  { path: 'reservations', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
