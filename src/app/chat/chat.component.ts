import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
   isMoreDetailsVisible=false;
   isMultimediaSectionOpen = false; 
   isConfidentialitySectionOpen = false; 

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
}
