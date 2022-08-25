import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewUsersComponent } from './card-view-users.component';

describe('CardViewUsersComponent', () => {
  let component: CardViewUsersComponent;
  let fixture: ComponentFixture<CardViewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
