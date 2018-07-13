import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeChartComponent } from './lake-chart.component';

describe('LakeChartComponent', () => {
  let component: LakeChartComponent;
  let fixture: ComponentFixture<LakeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
