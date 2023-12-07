import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {

  private selectedPersonSource = new BehaviorSubject<string>('');
  selectedPerson$ = this.selectedPersonSource.asObservable();

  private messages: { [key: string]: { content: string, sentByUser: boolean }[] } = {
    'Helena': [ 
      { content: 'Hello!', sentByUser: false },
  { content: 'Hi there!', sentByUser: true },
  { content: 'How are you?', sentByUser: false },
  { content: 'I\'m doing well, thanks!', sentByUser: true },
  { content: 'What have you been up to?', sentByUser: false },
  { content: 'Not much, just working on some projects.', sentByUser: true },
  ],


    'Roihmatoun': [
      { content: "Hey there!", sentByUser: false },
      { content: "Hi! How are you today?", sentByUser: true },
      { content: "I'm doing great, thanks for asking.", sentByUser: false },
      { content: "Have you seen the latest movie?", sentByUser: true },
      { content: "Yes, I watched it last weekend. It was awesome!", sentByUser: false },
      { content: "I need to catch up on my movie list.", sentByUser: true },
      { content: "Definitely! Let me know if you need recommendations.", sentByUser: false },
  ]
  };

  getMessages(person: string): { content: string, sentByUser: boolean }[] {
    return this.messages[person] || [];
  }

  sendMessage(person: string, message: string, sentByUser: boolean): void {
    if (!this.messages[person]) {
      this.messages[person] = [];
    }

    this.messages[person].push({ content: message, sentByUser });
  }

  selectPerson(person: string): void {
    this.selectedPersonSource.next(person);
  }
}
