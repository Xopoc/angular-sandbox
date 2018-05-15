import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
