import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashEventsComponent } from './dash-events.component';
import { DashEventsListItemComponent } from './dash-events-list-item/dash-events-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashEventsNewEventModalComponent } from './dash-events-new-event-modal/dash-events-new-event-modal.component';
import { DashEventsEditEventModalComponent } from './dash-events-edit-event-modal/dash-events-edit-event-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbPaginationModule, NgbTimepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedComponentsModule } from "../../../../components/components.shared.module";

@NgModule({
  declarations: [
    DashEventsComponent,
    DashEventsListItemComponent,
    DashEventsNewEventModalComponent,
    DashEventsEditEventModalComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FontAwesomeModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPaginationModule
  ],
  exports: [DashEventsComponent],
})
export class DashEventsModule {}
