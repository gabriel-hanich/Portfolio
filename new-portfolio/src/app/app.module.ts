import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ExperienceSectionComponent } from './components/sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './components/sections/projects-section/projects-section.component';
import { EnvelopeComponent } from './components/items/envelope/envelope.component';
import { RulerTextComponent } from './components/items/ruler-text/ruler-text.component';
import { RulerHeadingComponent } from './components/items/ruler-heading/ruler-heading.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';
import { NewspaperHeroComponent } from './components/items/newspaper-hero/newspaper-hero.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/items/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    EnvelopeComponent,
    RulerTextComponent,
    RulerHeadingComponent,
    ProjectPageComponent,
    NewspaperHeroComponent,
    ContactComponent,
    FooterComponent,
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
