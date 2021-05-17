import 'node_modules/flatpickr/dist/flatpickr.css';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnnouncementsViewComponent } from './announcements-view/announcements-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { InformationViewComponent } from './information-view/information-view.component';
import { PhotoGalleryViewComponent } from './photo-gallery-view/photo-gallery-view.component';
import { BoosterInfoViewComponent } from './booster-info-view/booster-info-view.component';
import { HistoryViewComponent } from './history-view/history-view.component';
import { HeadModalViewComponent } from './head-modal-view/head-modal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AnnouncementsViewComponent,
    CalendarViewComponent,
    InformationViewComponent,
    PhotoGalleryViewComponent,
    BoosterInfoViewComponent,
    HistoryViewComponent,
    HeadModalViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
    NgbModalModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
