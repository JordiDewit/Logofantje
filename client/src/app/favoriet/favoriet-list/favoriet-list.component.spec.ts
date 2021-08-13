import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorietListComponent } from './favoriet-list.component';

describe('FavorietListComponent', () => {
  let component: FavorietListComponent;
  let fixture: ComponentFixture<FavorietListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorietListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorietListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
