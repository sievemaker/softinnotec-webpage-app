import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftinnotecChessboardComponent } from './softinnotec-chessboard.component';

describe('SoftinnotecChessboardComponent', () => {
  let component: SoftinnotecChessboardComponent;
  let fixture: ComponentFixture<SoftinnotecChessboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftinnotecChessboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftinnotecChessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
