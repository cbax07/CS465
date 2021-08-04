import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
