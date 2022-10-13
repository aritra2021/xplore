import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcFormComponent } from './itc-form.component';

describe('ItcFormComponent', () => {
  let component: ItcFormComponent;
  let fixture: ComponentFixture<ItcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
