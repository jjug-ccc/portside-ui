import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions, RequestOptionsArgs } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatFormFieldModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatCardModule, MatIconModule, MatProgressSpinnerModule,
	MatDialogModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

import { CustomRequestOptionsService} from "./custom-request-options.service";
import { SessionService } from "./session.service";
import { AttendeeService} from "./attendee.service";

@NgModule({
	declarations: [
		AppComponent,
		SessionsComponent,
		ProfileComponent,
		ThanksComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatDialogModule
	],
	providers: [
		{
			provide: RequestOptions, useClass: CustomRequestOptionsService
		},
		SessionService,
		AttendeeService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
