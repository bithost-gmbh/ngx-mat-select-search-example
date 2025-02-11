import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

import { MatSelectSearchVersion } from 'ngx-mat-select-search';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  version = VERSION;

  matSelectSearchVersion = MatSelectSearchVersion;

  private rightToLeft = false;

  toggleRightToLeft() {
    this.rightToLeft = !this.rightToLeft;
    document.body.dir = this.rightToLeft ? 'rtl' : '';
  }

}
