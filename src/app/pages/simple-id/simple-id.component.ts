import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SimpleIdService} from './simple-id.service';
import {Meta, Title} from '@angular/platform-browser';

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
              private simpleIdService: SimpleIdService,
              private title: Title,
              private meta: Meta) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.itemSubscription = this.simpleIdService.getItemById(this.id).subscribe((data) => {
      this.item = data;
      this.title.setTitle(this.item.seo.title);
      this.meta.addTag({
        name: 'description',
        content: this.item.seo.description,
      });
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
