import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-customer-filter-container',
  templateUrl: './customer-filter-container.component.html',
  styleUrls: ['./customer-filter-container.component.scss']
})
export class CustomerFilterContainerComponent implements OnInit {
  filter: Filter;

  constructor() { }

  ngOnInit() {
    this.filter = new Filter();
  }

  onDiscardFilters() {
    this.filter = new Filter();
  }

  onApplyFilters() {
    console.log(this.filter);
  }
}
