export class EventAttribute {
  name: string;
  operator: StringAttributeOperator | NumberAttributeOperator;
  value: any;
  rangeValue: any;
  type: AttributeType
}

export enum AttributeType {
  StringAttribute,
  NumberAttribute
}

export enum StringAttributeOperator {
  Equals,
  NotEquals,
  Contains,
  NotContains
}

export enum NumberAttributeOperator {
  Equals,
  InBetween,
  LessThan,
  GreaterThan
}
