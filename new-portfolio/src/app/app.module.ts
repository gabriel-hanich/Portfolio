import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WelcomeTextComponent } from './components/items/welcome-text/welcome-text.component';
import { HeroContainerComponent } from './components/items/hero-container/hero-container.component';
import { ProjectsRotundaComponent } from './components/items/projects-rotunda/projects-rotunda.component';
import { PrivateComponent } from './components/pages/private/private.component';
import { ProjectsListComponent } from './components/items/projects-list/projects-list.component';
import { ProjectComponent } from './components/pages/project/project.component';
import { ExperienceComponent } from './components/items/experience/experience.component';
import { ResumeComponent } from './components/items/resume/resume.component';
import { ContactComponent } from './components/items/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeTextComponent,
    HeroContainerComponent,
    ProjectsRotundaComponent,
    PrivateComponent,
    ProjectsListComponent,
    ProjectComponent,
    ExperienceComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
