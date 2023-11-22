import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';


const routes: Routes = [

  // Définit le chemin et associe le composant ResetPasswordPageComponent à la route 'reset-password'
  { path: 'reset-password', component: ResetPasswordPageComponent },
  // Route générique pour gérer les routes inexistantes
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
