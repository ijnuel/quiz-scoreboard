import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePollingUnitResultComponent } from './update-polling-unit-result.component';

describe('UpdatePollingUnitResultComponent', () => {
  let component: UpdatePollingUnitResultComponent;
  let fixture: ComponentFixture<UpdatePollingUnitResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePollingUnitResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePollingUnitResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
