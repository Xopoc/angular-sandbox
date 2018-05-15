import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
