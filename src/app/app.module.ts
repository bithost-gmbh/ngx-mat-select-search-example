import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AppComponent } from './app.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import { OptionGroupsExampleComponent } from './examples/04-option-groups-example/option-groups-example.component';
import { CustomClearIconExampleComponent } from './examples/03-custom-clear-icon-example/custom-clear-icon-example.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { SingleSelectionExampleComponent } from './examples/01-single-selection-example/single-selection-example.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleSelectionExampleComponent,
    MultipleSelectionExampleComponent,
    CustomClearIconExampleComponent,
    OptionGroupsExampleComponent,
    ServerSideSearchExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
