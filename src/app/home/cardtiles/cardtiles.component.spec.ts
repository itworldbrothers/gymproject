import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtilesComponent } from './cardtiles.component';

describe('CardtilesComponent', () => {
  let component: CardtilesComponent;
  let fixture: ComponentFixture<CardtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
