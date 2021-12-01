import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page.routing';
import { LatestReleasesComponent } from './latest-releases/latest-releases.component';
import { EventsComponent } from './events/events.component';
import { TwitchComponent } from './twitch/twitch.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { BioComponent } from './bio/bio.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SharedComponentsModule } from '../../components/components.shared.module';
import { MastheadComponent } from './masthead/masthead.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventItemComponent } from './events/event-item/event-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MainPageComponent,
    LatestReleasesComponent,
    EventsComponent,
    TwitchComponent,
    YoutubeComponent,
    BioComponent,
    CallToActionComponent,
    MastheadComponent,
    EventItemComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    NgbModule,
  ],
})
export class MainPageModule { }
