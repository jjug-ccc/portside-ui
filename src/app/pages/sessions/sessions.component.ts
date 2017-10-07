import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { MatDialog } from "@angular/material";
import { ProfileComponent } from "../profile/profile.component";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { AttendeeService } from "../../attendee.service";

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

	sessions: any = [];

	attends: any = {};

	canEmail: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private sessionService: SessionService,
		private attendeeService: AttendeeService,
		private dialog: MatDialog) {
	}

	ngOnInit() {
		this.activatedRoute.queryParams
			.subscribe(params => {
				let o1 = this.sessionService.getSessions();
				let o2 = Observable.of(null);
				if (params.id) {
					o2 = this.attendeeService.getSessions(params.id);
				}

				Observable.forkJoin([o1, o2]).subscribe(results => {
					if (results[1]) {
						console.dir(results[1])
						results[1].forEach(session => {
							this.attends[session.id] = true;
						});
					}
					this.sessions = results[0];

					let ids = Object.keys(this.attends).filter(key => this.attends[key]);
					this.canEmail = ids.length > 0;
				});
			});
	}

	toggle(event) {
		this.attends[event.source.value] = event.checked;
		let ids = Object.keys(this.attends).filter(key => this.attends[key]);
		this.canEmail = ids.length > 0;
	}

	email() {
		this.dialog.open(ProfileComponent, {
			data: this.attends
		});
	}
}
