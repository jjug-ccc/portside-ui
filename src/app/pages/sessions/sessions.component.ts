import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

	private sessions: any = [];

	constructor(private sessionService: SessionService) {
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
		);;
	}

}
