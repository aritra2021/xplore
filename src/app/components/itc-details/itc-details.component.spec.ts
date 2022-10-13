import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItcDetailsComponent } from './itc-details.component';

describe('ItcDetailsComponent', () => {
  let component: ItcDetailsComponent;
  let fixture: ComponentFixture<ItcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItcDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
