import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SimpleIdService} from './simple-id.service';

@Component({
  selector: 'app-simple-id',
  templateUrl: './simple-id.component.html',
  styleUrls: ['./simple-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleIdComponent implements OnInit, OnDestroy {
  id: string = null;
  item: any = null;
  private itemSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private simpleIdService: SimpleIdService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.itemSubscription = this.simpleIdService.getItemById(this.id).subscribe((data) => {
      this.item = data;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
