import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { MdDialog } from "@angular/material";
import { ProfileComponent } from "../profile/profile.component";

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

	sessions: any = [];

	attends: any = [];

	constructor(
		private sessionService: SessionService,
		private dialog: MdDialog) {
	}

	ngOnInit() {
		this.sessionService.getSessions().subscribe(
			data => {
				console.dir(data);
				this.sessions = data;
			},
			error => {
				console.dir(error);
			}
		);
	}

	toggle() {
		console.dir(this.attends);
	}

	email() {
		console.log('%%%')
		console.dir(this.attends)
		this.dialog.open(ProfileComponent, {
			data: this.attends
		});
	}
}
