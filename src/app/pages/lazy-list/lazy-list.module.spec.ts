import { LazyListModule } from './lazy-list.module';

describe('LazyListModule', () => {
  let lazyListModule: LazyListModule;

  beforeEach(() => {
    lazyListModule = new LazyListModule();
  });

  it('should create an instance', () => {
    expect(lazyListModule).toBeTruthy();
  });
});
