import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIdComponent } from './simple-id.component';

describe('SimpleIdComponent', () => {
  let component: SimpleIdComponent;
  let fixture: ComponentFixture<SimpleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
