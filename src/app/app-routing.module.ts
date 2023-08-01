import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home',component: HomePageComponent},
  {path: 'about-us',component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
