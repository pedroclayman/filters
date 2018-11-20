import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';

@Component({
  selector: 'app-event-select',
  templateUrl: './event-select.component.html',
  styleUrls: ['./event-select.component.scss']
})
export class EventSelectComponent implements OnInit {
  @Output() eventSelected = new EventEmitter<string>();
  events: string[];

  constructor(
    private eventData: EventDataService
  ) { }

  ngOnInit() {
    this.events = this.eventData.getEvents();
  }

  onSelectionChange(e) {
    this.eventSelected.emit(e.value);
  }
}
