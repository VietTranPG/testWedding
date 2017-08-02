import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarComponent } from './content-car.component';

describe('ContentCarComponent', () => {
  let component: ContentCarComponent;
  let fixture: ComponentFixture<ContentCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
