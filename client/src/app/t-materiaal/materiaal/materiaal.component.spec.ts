import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaalComponent } from './materiaal.component';

describe('MateriaalComponent', () => {
  let component: MateriaalComponent;
  let fixture: ComponentFixture<MateriaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
