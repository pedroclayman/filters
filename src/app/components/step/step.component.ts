import { Component, OnInit, Input } from '@angular/core';
import { FilterStep } from 'src/app/models/filter-step';
import { EventAttribute } from 'src/app/models/event-attribute';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: FilterStep;
  @Input() order: number;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.step.eventName;
  }

  onEventSelected(event) {
    this.title = event;
    this.step.eventName = event;
  }

  onAddAttribute() {
    this.step.attributes = [...this.step.attributes, new EventAttribute()];
  }
}
