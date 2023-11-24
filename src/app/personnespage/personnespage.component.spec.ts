import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnespageComponent } from './personnespage.component';

describe('PersonnespageComponent', () => {
  let component: PersonnespageComponent;
  let fixture: ComponentFixture<PersonnespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnespageComponent]
    });
    fixture = TestBed.createComponent(PersonnespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
