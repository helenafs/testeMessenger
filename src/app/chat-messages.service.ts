import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {

  private selectedPersonSource = new BehaviorSubject<string>('');
  selectedPerson$ = this.selectedPersonSource.asObservable();

  private messages: { [key: string]: { content: string, sentByUser: boolean }[] } = {
    'Helena': [ { content: 'Hello!', sentByUser: false },
    { content: 'How are you?', sentByUser: true }],





    'Roihmatoun': [{ content: 'Hello Roi!', sentByUser: false },
    { content: 'How are you b?', sentByUser: true }]
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
