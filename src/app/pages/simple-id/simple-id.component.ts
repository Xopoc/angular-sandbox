import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-simple-id',
  templateUrl: './simple-id.component.html',
  styleUrls: ['./simple-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleIdComponent implements OnInit {
  id: string = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
