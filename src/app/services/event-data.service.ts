import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  constructor() { }

  getEvents() {
    return [
      'python_script_event',
      'python_script_event1',
      'python_script_event2',
      'python_script_event3',
      'C1',
      'C2'
    ];
  }
}
