import { NavigationToolbarModule } from './navigation-toolbar.module';

describe('NavigationToolbarModule', () => {
  let navigationToolbarModule: NavigationToolbarModule;

  beforeEach(() => {
    navigationToolbarModule = new NavigationToolbarModule();
  });

  it('should create an instance', () => {
    expect(navigationToolbarModule).toBeTruthy();
  });
});
