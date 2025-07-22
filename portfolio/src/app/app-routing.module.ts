import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectPageComponent } from './components/pages/project-page/project-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent 
  },
  {
    path: "project/:projectSlug",
    component: ProjectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
