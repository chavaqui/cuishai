import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RecoverUserInformationComponent } from './components/home-page/recover-user-information/recover-user-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomePageComponent,
    RecoverUserInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
