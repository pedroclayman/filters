import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerFilterContainerComponent } from './components/customer-filter-container/customer-filter-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StepComponent } from './components/step/step.component';
import { EventSelectComponent } from './components/event-select/event-select.component';
import { AttributeComponent } from './components/attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFilterContainerComponent,
    StepComponent,
    EventSelectComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
