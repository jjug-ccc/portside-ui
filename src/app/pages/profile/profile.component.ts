import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(private sessionService: SessionService) {
	}

	ngOnInit() {
	}

	attend() {
		this.sessionService.addAttendee().subscribe(
			data => {
				console.dir(data);
			},
			error => {
				console.dir(error);
			}
		);
	}
}
