import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LazyListService} from '../lazy-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit, OnDestroy {
  id: string = null;
  item: any = null;
  private itemSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private listService: LazyListService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.itemSubscription = this.listService.getItemById(this.id).subscribe((data) => {
      this.item = data;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
