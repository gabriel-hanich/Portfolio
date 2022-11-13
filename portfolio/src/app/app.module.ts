import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MenuBarComponent } from './components/components/menu-bar/menu-bar.component';
import { ProjectsComponent } from './components/components/projects/projects.component';
import { ExperienceComponent } from './components/components/experience/experience.component';
import { ContactComponent } from './components/components/contact/contact.component';
import { PrivatePageComponent } from './components/pages/private-page/private-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HowMadeComponent } from './components/components/how-made/how-made.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    PrivatePageComponent,
    HowMadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
