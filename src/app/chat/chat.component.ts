import { Component, OnInit } from '@angular/core';
import { ChatMessagesService } from '../chat-messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

 

  isElementVisible: boolean = false;
  isMoreDetailsVisible: boolean = false;
  isMultimediaSectionOpen: boolean = false;
  isConfidentialitySectionOpen: boolean = false;
  messages: { content: string, sentByUser: boolean }[] = [];
  selectedPerson: string = '';
  newMessage: string = '';

  constructor( private chatService: ChatMessagesService) {}

  toggleMoreDetails() {
    this.isMoreDetailsVisible = !this.isMoreDetailsVisible;
  }

  toggleSection(section: string) {
    if (section === 'multimedia') {
      this.isMultimediaSectionOpen = !this.isMultimediaSectionOpen;
      this.isConfidentialitySectionOpen = false;
    } else if (section === 'confidentiality') {
      this.isConfidentialitySectionOpen = !this.isConfidentialitySectionOpen;
      this.isMultimediaSectionOpen = false;
    }
  }

  ngOnInit() {
    this.chatService.selectedPerson$.subscribe(person => {

      this.selectedPerson = person;
      this.messages = this.chatService.getMessages(person);
      if (this.messages.length === 0) {
        this.addDummyMessages();
      }
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(this.selectedPerson, this.newMessage, true);
      this.messages = this.chatService.getMessages(this.selectedPerson);
    
      this.newMessage = '';
    }
  }
  private addDummyMessages(): void {
    // Add your dummy messages here
    this.chatService.sendMessage(this.selectedPerson, 'Hello!', false);
    this.chatService.sendMessage(this.selectedPerson, 'How are you?', true);
    // Add more messages as needed
  }
}
