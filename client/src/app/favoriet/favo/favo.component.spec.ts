import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoComponent } from './favo.component';

describe('FavoComponent', () => {
  let component: FavoComponent;
  let fixture: ComponentFixture<FavoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
