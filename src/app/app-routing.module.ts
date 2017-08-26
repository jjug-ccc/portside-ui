import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsComponent } from "./pages/sessions/sessions.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ThanksComponent } from "./pages/thanks/thanks.component";

const routes: Routes = [
	{ path: '', redirectTo: 'sessions', pathMatch: 'full' },
	{ path: 'sessions', component: SessionsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'thanks', component: ThanksComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
