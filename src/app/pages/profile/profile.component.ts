import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	private attendee: any = {};

	constructor(
		private sessionService: SessionService,
		private router: Router) {
	}

	ngOnInit() {
	}

	attend() {
		console.log(this.attendee.email)
		this.sessionService.addAttendee().subscribe(
			data => {
				console.dir(data);
				this.router.navigate(['/thanks'])
			},
			error => {
				console.dir(error);
			}
		);
	}
}
