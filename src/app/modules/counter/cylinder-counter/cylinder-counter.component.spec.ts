import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderCounterComponent } from './cylinder-counter.component';

describe('CylinderCounterComponent', () => {
  let component: CylinderCounterComponent;
  let fixture: ComponentFixture<CylinderCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CylinderCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
