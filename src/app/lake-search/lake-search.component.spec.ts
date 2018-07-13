import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeSearchComponent } from './lake-search.component';

describe('LakeSearchComponent', () => {
  let component: LakeSearchComponent;
  let fixture: ComponentFixture<LakeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
