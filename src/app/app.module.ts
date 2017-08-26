import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    ProfileComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
