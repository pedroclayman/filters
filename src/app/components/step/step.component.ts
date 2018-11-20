import { Component, OnInit, Input } from '@angular/core';
import { FilterStep } from 'src/app/models/filter-step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() step: FilterStep;

  constructor() { }

  ngOnInit() {
  }

}
