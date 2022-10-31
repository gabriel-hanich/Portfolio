import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MenuBarComponent } from './components/components/menu-bar/menu-bar.component';
import { ProjectsComponent } from './components/components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
