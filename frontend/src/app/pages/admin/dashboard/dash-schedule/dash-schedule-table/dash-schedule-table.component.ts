import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { StreamingScheduleElement } from "../../../../../core/models/schedule-day.model";
import { Observable, take } from "rxjs";
import { selectIsScheduleFetched, selectSchedule } from "../../../../../store/schedule.selectors";
import { fetchSchedule } from "../../../../../store/schedule.actions";

@Component({
  selector: 'app-dash-schedule-table',
  templateUrl: './dash-schedule-table.component.html',
  styleUrls: ['./dash-schedule-table.component.scss']
})
export class DashScheduleTableComponent {
  schedule$: Observable<StreamingScheduleElement[]>

  constructor(private readonly store: Store) {
    // if schedule has not been fetched yet, fetch it
    this.store.select(selectIsScheduleFetched).pipe(take(1)).subscribe(isScheduleFetched => {
      if (!isScheduleFetched) {
        this.refreshSchedule();
      }
    });
    // load schedule from store
    this.schedule$ = this.store.select(selectSchedule);
  }

  refreshSchedule() {
    this.store.dispatch(fetchSchedule());
  }
}
