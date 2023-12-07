import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-conversation-page',
  templateUrl: './conversation-page.component.html',
  styleUrls: ['./conversation-page.component.css']
})
export class ConversationPageComponent {


  public personne : any[]=[];
  currentSection: string = 'conversation';

  toggleSection(section: string): void {
    this.currentSection = section;
  }
  constructor(){
    this.personne.push('Helena');
    this.personne.push('Roihmatoun');
    this.personne.push('Jean Christophe');
    this.personne.push('Sasha');
    this.personne.push('Ahmed');
    this.personne.push('Alexandre');
    this.personne.push('Eridge');
    this.personne.push('Raina');
    this.personne.push('Aurélien');
    this.personne.push('Olivier');
  }
  


}
