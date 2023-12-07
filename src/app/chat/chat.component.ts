import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
   isMoreDetailsVisible=false;

  toggleMoreDetails() {
    this.isMoreDetailsVisible = !this.isMoreDetailsVisible;
  }

}
