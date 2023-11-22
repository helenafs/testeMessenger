import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationPageComponentComponent } from './conversation-page-component.component';

describe('ConversationPageComponentComponent', () => {
  let component: ConversationPageComponentComponent;
  let fixture: ComponentFixture<ConversationPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationPageComponentComponent]
    });
    fixture = TestBed.createComponent(ConversationPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
