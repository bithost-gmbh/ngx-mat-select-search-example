import { Component } from '@angular/core';
import { VERSION } from '@angular/material';

import { MatSelectSearchVersion } from 'ngx-mat-select-search';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  version = VERSION;

  matSelectSearchVersion = MatSelectSearchVersion;
}
