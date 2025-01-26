import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BinderHeroComponent } from './components/items/binder-hero/binder-hero.component';
import { ExperienceSectionComponent } from './components/sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/sections/projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BinderHeroComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
