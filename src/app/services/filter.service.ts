import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterStep } from '../models/filter-step';

@Injectable()
export class FilterService {
  private stepAdded = new Subject();
  stepAdded$ = this.stepAdded.asObservable();

  emitResult(step: FilterStep) {
    this.stepAdded.next(step);
  }

  constructor() { }
}
