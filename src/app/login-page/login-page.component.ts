import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

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
    this.enrigestreLogin();
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

  buttonSeConnecter(emailInput:NgModel,motPasseInput:NgModel){
    //voir si l'email et le mot de passe sont valides
    return this.validateEmail(emailInput) && this.validateMotPasse(motPasseInput);
  }

  isValidForm(emailInput:NgModel,motPasseInput:NgModel) {
    //voir si l'email et le mot de passe sont valides et si ils existent
    //pour fairele button se connecter apparaitre juste quand il y a un mail et un mot de passe
    return this.email && this.motPasse && this.buttonSeConnecter(emailInput,motPasseInput);
  }



  enrigestreLogin() {
    //enregistre le login et mot de passe dans local storage
    const sauvegarderCheckbox = document.getElementById('sauvegarder') as HTMLInputElement;
    if (sauvegarderCheckbox.checked) {
      const encryptedPassword = CryptoJS.AES.encrypt(this.motPasse, 'motdepassecrypte').toString();
      localStorage.setItem('email', this.email);
      localStorage.setItem('motdePasse', encryptedPassword);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('motdePasse');
    }
}

ngOnInit() {
  //carrega os dados email e login do local storage
  this.loadLogin();
}

loadLogin() {
  // Charge les données d'email et de mot de passe depuis le localStorage
  const email = localStorage.getItem('email');
  const motPasse = localStorage.getItem('motdePasse');

  // Vérifie s'il y a des données dans le localStorage
  if (email && motPasse) {
    // Affecte les valeurs récupérées aux variables du composant
    this.email = email;
    this.motPasse = motPasse;
  }
}










}
