import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent {
  public email: string = '';

  validateEmail(emailInput: NgModel) {
    // Format d'email ccccc@ccc.ccc
    return /\S+@\S+\.\S+/.test(emailInput.value) || (!emailInput.touched && !emailInput.dirty);
  }
}
