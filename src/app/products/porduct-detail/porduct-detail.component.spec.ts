import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductDetailComponent } from './porduct-detail.component';

xdescribe('PorductDetailComponent', () => {
  let component: PorductDetailComponent;
  let fixture: ComponentFixture<PorductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
