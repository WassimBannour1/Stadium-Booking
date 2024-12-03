import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { AppComponent } from './app.component';
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
import { CheckmymatchesComponent } from './user/checkmymatches/checkmymatches.component';
import { MyreservationsmanagmentComponent } from './user/myreservationsmanagment/myreservationsmanagment.component';
import { BookamatchComponent } from './user/bookamatch/bookamatch.component';
import { PlayersmanagementComponent } from './user/playersmanagement/playersmanagement.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './signup/signup.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import SignupService

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent,
    SearchComponent,
    BookingComponent,
    AdminComponent,
    MyaccountComponent,
    StadiummanagmentComponent,
    UseraccountmanagmentComponent,
    ReservationmanagmentComponent,
    CalendermanagmentComponent,
    UserComponent,
    CheckmymatchesComponent,
    MyreservationsmanagmentComponent,
    BookamatchComponent,
    PlayersmanagementComponent,
    // Add other components here as your application grows
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import your AppRoutingModule to include routing
    FormsModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [SignupService, provideAnimationsAsync()], // Add SignupService here
  bootstrap: [AppComponent]
})
export class AppModule { }
