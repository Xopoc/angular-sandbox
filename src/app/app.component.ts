import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  title = 'app';
  isResourceLoaded = false;
  private resourceTimeout = null;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  handleResourceLoad() {
    this.resourceTimeout = setTimeout(() => {
      this.isResourceLoaded = true;
      this.changeDetector.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.resourceTimeout) {
      clearTimeout(this.resourceTimeout);
    }
  }
}
