import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { BinderHeroComponent } from './components/items/binder-hero/binder-hero.component';
import { ExperienceSectionComponent } from './components/sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/sections/projects-section/projects-section.component';
import { EnvelopeComponent } from './components/items/envelope/envelope.component';
import { RulerTextComponent } from './components/items/ruler-text/ruler-text.component';
import { RulerHeadingComponent } from './components/items/ruler-heading/ruler-heading.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BinderHeroComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    EnvelopeComponent,
    RulerTextComponent,
    RulerHeadingComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
