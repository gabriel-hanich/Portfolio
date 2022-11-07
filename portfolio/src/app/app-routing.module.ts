import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/components/experience/experience.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PrivatePageComponent } from './components/pages/private-page/private-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "private",
    component: PrivatePageComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
