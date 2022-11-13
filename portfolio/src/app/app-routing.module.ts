import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowMadeComponent } from './components/components/how-made/how-made.component';
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
    path: "made",
    component: HowMadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
