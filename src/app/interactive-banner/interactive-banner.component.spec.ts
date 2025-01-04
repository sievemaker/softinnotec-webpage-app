import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBannerComponent } from './interactive-banner.component';

describe('InteractiveBannerComponent', () => {
  let component: InteractiveBannerComponent;
  let fixture: ComponentFixture<InteractiveBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
