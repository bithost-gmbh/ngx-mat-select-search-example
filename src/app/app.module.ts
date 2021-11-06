import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { AppComponent } from './app.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import { OptionGroupsExampleComponent } from './examples/04-option-groups-example/option-groups-example.component';
import { CustomClearIconExampleComponent } from './examples/03-custom-clear-icon-example/custom-clear-icon-example.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { SingleSelectionExampleComponent } from './examples/01-single-selection-example/single-selection-example.component';
import { MultipleSelectionSelectAllExampleComponent } from './examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component';
import { TooltipSelectAllExampleComponent } from './examples/07-tooltip-select-all-example/tooltip-select-all-example.component';
import { InfiniteScrollExampleComponent } from './examples/08-infinite-scroll-example/infinite-scroll-example.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    SingleSelectionExampleComponent,
    MultipleSelectionExampleComponent,
    CustomClearIconExampleComponent,
    OptionGroupsExampleComponent,
    ServerSideSearchExampleComponent,
    MultipleSelectionSelectAllExampleComponent,
    TooltipSelectAllExampleComponent,
    InfiniteScrollExampleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
