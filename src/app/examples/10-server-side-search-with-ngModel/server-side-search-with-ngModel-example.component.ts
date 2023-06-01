import {Component, OnDestroy, OnInit,} from '@angular/core';
import {Bank} from '../demo-data';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {APIService} from './server-side.service';

@Component({
  selector: 'server-side-search-with-ngModel',
  templateUrl: './server-side-search-with-ngModel-example.component.html',
  styleUrls: ['./server-side-search-with-ngModel-example.component.scss'],
})
export class ServerSideSearchWithNgModelExampleComponent implements OnInit, OnDestroy {
  constructor(private apiService: APIService) {
  }

  /** list of banks */
  protected banks: Bank[] = [];

  /**  the selected bank for server side filtering and can fill on ngOnInit */
  public selectedBanks: Bank[];

  /** control for filter for server side. */
  public bankServerSideFilteringCtrl: FormControl<string> = new FormControl<string>('');

  /** indicate search operation is in progress */
  public searching = false;

  /** list of banks filtered after simulating server side search */
  public filteredServerSideBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  ngOnInit() {
    this.getAllBanks();

    // listen for search field value changes
    this.bankServerSideFilteringCtrl.valueChanges
      .pipe(
        takeUntil(this._onDestroy),
        debounceTime(200),
        takeUntil(this._onDestroy)
      )
      .subscribe(search => {
          if (search) {
            const params = [
              {
                name: 'q',
                value: search
              },
              {
                name: '_limit',
                value: 5
              }
            ];
            this.apiService.get('/BANKS', params).pipe(takeUntil(this._onDestroy)).subscribe((res: Bank[]) => {
              this.searching = false;
              this.filteredServerSideBanks.next(res);
            });
          } else {
            this.getAllBanks();
          }
        },
        error => {
          // no errors in our simulated example
          this.searching = false;
          // handle error...
        });

  }

  getAllBanks() {
    this.apiService.get('/BANKS', [{
      name: '_limit',
      value: 5
    }]).pipe(takeUntil(this._onDestroy)).subscribe((res: Bank[]) => {
      this.filteredServerSideBanks.next(res);
      this.searching = false;
    });
  }

  compareWithFn(a: Bank, b: Bank) {
    if (a && b) {
      return a.id === b.id;
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
