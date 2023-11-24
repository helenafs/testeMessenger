import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ConversationPageComponent } from './conversation-page/conversation-page.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonnespageComponent } from './personnespage/personnespage.component';

const routes: Routes = [
  //Définit le chemin de la page initial
  {path:'', component: DefaultPageComponent,
  children: [
   { path: '', component: LoginPageComponent}
  ]

  },
  // Définit le chemin et associe le composant ResetPasswordPageComponent à la route 'reset-password'
  {path: 'reset-password', component: ResetPasswordPageComponent },
  {path:'conversation-page',component: ConversationPageComponent},
  // Route générique pour gérer les routes inexistantes
  { path: '**', redirectTo: '/404' },
  { path: 'personnes-page',component: PersonnespageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
