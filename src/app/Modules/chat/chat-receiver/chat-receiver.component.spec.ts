import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatReceiverComponent } from './chat-receiver.component';

describe('ChatReceiverComponent', () => {
  let component: ChatReceiverComponent;
  let fixture: ComponentFixture<ChatReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
