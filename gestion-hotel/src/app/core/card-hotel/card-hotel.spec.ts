import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHotel } from './card-hotel';

describe('CardHotel', () => {
  let component: CardHotel;
  let fixture: ComponentFixture<CardHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
