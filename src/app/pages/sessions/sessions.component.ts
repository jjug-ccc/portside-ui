import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { MdDialog } from "@angular/material";
import { ProfileComponent } from "../profile/profile.component";

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

	sessions: any = [];

	attends: any = [];

	canEmail: boolean = false;

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
		let ids = Object.keys(this.attends).filter(key => this.attends[key]);
		this.canEmail = ids.length > 0;
	}

	email() {
		this.dialog.open(ProfileComponent, {
			data: this.attends
		});
	}
}
