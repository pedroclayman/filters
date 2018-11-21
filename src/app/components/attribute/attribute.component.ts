import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { EventDataService } from "../../services/event-data.service";
import { EventAttribute } from "../../models/event-attribute";

@Component({
  selector: "app-attribute",
  templateUrl: "./attribute.component.html",
  styleUrls: ["./attribute.component.scss"]
})
export class AttributeComponent implements OnInit {
  @Input() eventName: string;
  @Input() attribute: EventAttribute;
  @Output() attributeDeleted = new EventEmitter<EventAttribute>();
  attributeNames: string[];
  numberOperators: any[];
  stringOperators: any[];

  constructor(private eventData: EventDataService) {}

  ngOnInit() {
    this.attributeNames = this.eventData.getEventAttributes(this.eventName);
    this.numberOperators = this.eventData.getNumberOperators();
    this.stringOperators = this.eventData.getStringOperators();
  }

  onSelectionChange(e) {
    this.attribute.name = e.value;
  }

  onOperatorChange(e) {
    this.attribute.operator = e.value;
  }

  onValueChange(e) {
    this.attribute.value = e.target.value;
  }

  onDeleteAttribute() {
    this.attributeDeleted.emit(this.attribute);
  }
}
