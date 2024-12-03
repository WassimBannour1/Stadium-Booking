import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signup/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { MyaccountComponent } from './admin/myaccount/myaccount.component';
import { StadiummanagmentComponent } from './admin/stadiummanagment/stadiummanagment.component';
import { UseraccountmanagmentComponent } from './admin/useraccountmanagment/useraccountmanagment.component';
import { ReservationmanagmentComponent } from './admin/reservationmanagment/reservationmanagment.component';
import { CalendermanagmentComponent } from './admin/calendermanagment/calendermanagment.component';

import { UserComponent } from './user/user.component';
import { BookamatchComponent } from './user/bookamatch/bookamatch.component';
import { CheckmymatchesComponent } from './user/checkmymatches/checkmymatches.component';
import { MyaccountComponent as UserMyAccountComponent } from './user/myaccount/myaccount.component';
import { MyreservationsmanagmentComponent } from './user/myreservationsmanagment/myreservationsmanagment.component';
import { PlayersmanagementComponent } from './user/playersmanagement/playersmanagement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'search', component: SearchComponent },
  { path: 'booking', component: BookingComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'myaccount', component: MyaccountComponent },
      { path: 'stadium-management', component: StadiummanagmentComponent },
      { path: 'user-management', component: UseraccountmanagmentComponent },
      { path: 'reservation-management', component: ReservationmanagmentComponent },
      { path: 'calendar-management', component: CalendermanagmentComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'myaccount', component: UserMyAccountComponent },
      { path: 'checkmymatches', component: CheckmymatchesComponent },
      { path: 'myreservationsmanagment', component: MyreservationsmanagmentComponent },
      { path: 'bookamatch', component: BookamatchComponent },
      { path: 'playersmanagement', component: PlayersmanagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
