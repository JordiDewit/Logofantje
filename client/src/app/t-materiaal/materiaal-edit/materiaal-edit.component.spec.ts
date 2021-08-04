import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaalEditComponent } from './materiaal-edit.component';

describe('MateriaalEditComponent', () => {
  let component: MateriaalEditComponent;
  let fixture: ComponentFixture<MateriaalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
