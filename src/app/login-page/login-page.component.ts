import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public email: string = '';
  public motPasse: string = '';

  constructor(private router: Router) {
    // Router disponible dans ce composant
  }

  login() {
    console.log('Email:', this.email);
    console.log('motPasse:', this.motPasse);
  }

  validateEmail(emailInput: NgModel) {
    // Format d'email ccccc@ccc.ccc
    return /\S+@\S+\.\S+/.test(emailInput.value) || (!emailInput.touched && !emailInput.dirty);
  }

  validateMotPasse(motPasseInput: NgModel) {
    // Doit contenir 8 et 100 caracteres
    return motPasseInput.value.length >= 8 && motPasseInput.value.length <= 100 || (!motPasseInput.touched && !motPasseInput.dirty);
  }

  enrigestreLogin(){
    //enregistre le email et mot de passe dans local storage
    localStorage.setItem('email', this.email);
    localStorage.setItem('motdePasse', this.motPasse);
  }

  /**
   *
   */


}
