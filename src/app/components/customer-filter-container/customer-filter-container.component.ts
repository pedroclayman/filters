import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-filter-container',
  templateUrl: './customer-filter-container.component.html',
  styleUrls: ['./customer-filter-container.component.scss']
})
export class CustomerFilterContainerComponent implements OnInit {
  filters = [];

  constructor() { }

  ngOnInit() {
  }

  onDiscardFilters() {
    this.filters = [];
  }

  onApplyFilters() {
    console.log(this.filters);
  }
}
