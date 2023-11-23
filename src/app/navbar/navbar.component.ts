import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  redirectionAlert(url: string) {
    if (confirm('Vous serez redirigé hors de l\'application. Voulez-vous continuer?')) {
      window.location.href = url;
    }
  }

}
