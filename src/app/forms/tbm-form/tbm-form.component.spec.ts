import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbmFormComponent } from './tbm-form.component';

describe('TbmFormComponent', () => {
  let component: TbmFormComponent;
  let fixture: ComponentFixture<TbmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
