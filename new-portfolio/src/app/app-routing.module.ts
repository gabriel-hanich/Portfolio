import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PrivateComponent } from './components/pages/private/private.component';
import { ProjectComponent } from './components/pages/project/project.component';
import { AdminComponent } from './components/pages/admin/admin.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "private",
    component: PrivateComponent
  },
  {
    path: "project/:projectName",
    component: ProjectComponent
  },
  {
    path: "admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
