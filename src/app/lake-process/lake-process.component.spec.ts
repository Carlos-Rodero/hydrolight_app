import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeProcessComponent } from './lake-process.component';

describe('LakeProcessComponent', () => {
  let component: LakeProcessComponent;
  let fixture: ComponentFixture<LakeProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakeProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
