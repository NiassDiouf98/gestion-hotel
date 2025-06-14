import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDash } from './card-dash';

describe('CardDash', () => {
  let component: CardDash;
  let fixture: ComponentFixture<CardDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
