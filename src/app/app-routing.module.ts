import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsViewComponent } from './announcements-view/announcements-view.component';
import { BoosterInfoViewComponent } from './booster-info-view/booster-info-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { HistoryViewComponent } from './history-view/history-view.component';
import { InformationViewComponent } from './information-view/information-view.component';
import { PhotoGalleryViewComponent } from './photo-gallery-view/photo-gallery-view.component';

const routes: Routes = [
  { path: '', component: AnnouncementsViewComponent},
  { path: 'booster', component: BoosterInfoViewComponent},
  { path: 'information', component: InformationViewComponent},
  { path: 'calendar', component: CalendarViewComponent},
  { path: 'gallery', component: PhotoGalleryViewComponent},
  { path: 'history', component: HistoryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
