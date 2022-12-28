import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialnotificationComponent } from './socialnotification.component';

describe('SocialnotificationComponent', () => {
  let component: SocialnotificationComponent;
  let fixture: ComponentFixture<SocialnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
