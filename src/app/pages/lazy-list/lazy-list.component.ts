import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LazyListService} from './lazy-list.service';

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyListComponent implements OnInit, OnDestroy {
  private _list: any[] = [];
  private listSubscription: Subscription;

  constructor(private lazyListService: LazyListService,
              private changeDetector: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.listSubscription = this.lazyListService.getList().subscribe(data => {
      this.list = data;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }


  get list(): any[] {
    return this._list;
  }

  set list(value: any[]) {
    this._list = value;
  }

}
