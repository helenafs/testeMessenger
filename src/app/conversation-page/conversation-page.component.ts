import { ChangeDetectionStrategy,Component } from '@angular/core';
import { ChatMessagesService } from '../chat-messages.service';
@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.css']
})
export class ConversationPageComponent {
  constructor(private chatService: ChatMessagesService){}


  searchTerm: string = '';
  personne: string[] = ['Helena', 'Roihmatoun', 'Jean Christophe', 'Sasha', 'Ahmed', 'Alexandre', 'Eridge', 'Aurélien','Walid' ];
  filteredPersonnes: string[] = [];
  isSearching: boolean = false;
  selectedPersonne: string = '';

  selectPerson(person: string): void {
    this.selectedPersonne = person;
    this.chatService.selectPerson(person);
  }

  onSearch() {
    this.filteredPersonnes = this.personne.filter(
      name => name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  onSearchInputChange() {
    this.isSearching = this.searchTerm.length > 0;
    this.onSearch();
  }


  
  currentSection: string = 'chats';

  toggleSection(section: string): void {
    this.currentSection = section;
  }


  


}
