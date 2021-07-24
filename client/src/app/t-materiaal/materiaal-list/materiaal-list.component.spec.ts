import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaalListComponent } from './materiaal-list.component';

describe('MateriaalListComponent', () => {
  let component: MateriaalListComponent;
  let fixture: ComponentFixture<MateriaalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
