import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsliderComponent } from './cardslider.component';

describe('CardsliderComponent', () => {
  let component: CardsliderComponent;
  let fixture: ComponentFixture<CardsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
