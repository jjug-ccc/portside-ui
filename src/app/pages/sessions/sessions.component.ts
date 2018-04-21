import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { MatDialog } from "@angular/material";
import { ProfileComponent } from "../profile/profile.component";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import { AttendeeService } from "../../attendee.service";

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

	loading: boolean = true;
	sessions: any = [];
	attends: any = {};
	canEmail: boolean = false;
	attendeeId: string = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
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
					this.attendeeId = params.id;
					o2 = this.attendeeService.getSessions(params.id);
				}

				Observable.forkJoin([o1, o2]).subscribe(results => {
					this.loading = false;

					if (results[1]) {
						results[1].forEach(session => {
							this.attends[session.submissionId] = true;
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
		if (this.attendeeId == null) {
			this.dialog.open(ProfileComponent, {
				data: this.attends
			});
		} else {
			let ids = Object.keys(this.attends).filter(key => this.attends[key]);
			this.attendeeService.updateSessions(this.attendeeId, ids).subscribe(
				data => {
					this.router.navigate(['/thanks'])
				},
				error => {
					console.log(error);
				}
			);
		}
	}
}
