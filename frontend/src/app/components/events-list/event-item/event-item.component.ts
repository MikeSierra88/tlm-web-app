import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ExistingScheduledEvent } from '../../../core/models/scheduled-event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent implements OnInit {
  @Input() scheduledEvent!: ExistingScheduledEvent;

  dayjs = dayjs;
  startDayjs: dayjs.Dayjs;
  endDayjs: dayjs.Dayjs | null;
  duration = 0;

  constructor() {}

  ngOnInit() {
    this.startDayjs = dayjs(this.scheduledEvent.date);
    this.endDayjs = this.scheduledEvent.endDate ? dayjs(this.scheduledEvent.endDate) : null;
    if (this.endDayjs) {
      this.duration = dayjs.duration(this.endDayjs.diff(this.startDayjs)).asHours();
    }
  }
}
