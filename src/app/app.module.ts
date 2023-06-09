import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AjouterConcoursComponent } from './components/ajouter-concours/ajouter-concours.component';
import { MenuConcoursComponent } from './components/menu-concours/menu-concours.component';
import { ListeconcoursComponent } from './components/listeconcours/listeconcours.component';
import { ListeConcoursComponent } from './components/liste-concours/liste-concours.component';
import { ProfilCandidatComponent } from './components/profil-candidat/profil-candidat.component';
import { CandidatureComponent } from './components/candidature/candidature.component';
import { EtablissementComponent } from './components/etablissement/etablissement.component';
import { ProfilAdminComponent } from './components/profil-admin/profil-admin.component';
import { ModifEtablissementComponent } from './components/modif-etablissement/modif-etablissement.component';
import { MenConcoursComponent } from './components/men-concours/men-concours.component';
import { ModifConcoursComponent } from './components/modif-concours/modif-concours.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    HomeComponent,
    LoginPageComponent,
    AdminComponent,
    AjouterConcoursComponent,
    MenuConcoursComponent,
    ListeconcoursComponent,
    ListeConcoursComponent,
    ProfilCandidatComponent,
    CandidatureComponent,
    EtablissementComponent,
    ProfilAdminComponent,
    ModifEtablissementComponent,
    MenConcoursComponent,
    ModifConcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
