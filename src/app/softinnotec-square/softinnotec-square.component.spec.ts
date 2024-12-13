import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftinnotecSquareComponent } from './softinnotec-square.component';

describe('SoftinnotecSquareComponent', () => {
  let component: SoftinnotecSquareComponent;
  let fixture: ComponentFixture<SoftinnotecSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftinnotecSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftinnotecSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
