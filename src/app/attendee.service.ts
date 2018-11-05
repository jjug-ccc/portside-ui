import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AttendeeService {

	constructor(private http: Http) {
	}

	getSessions(id) {
		return this.http.get(`/v1/conferences/fcb9a015-4fb9-4c2b-ad9e-6d71caabf202/attendees/${id}`).map((response: Response) => {
			return response.json().submissions;
		});
	}

	updateSessions(id, sessionIds) {
		let body = {
			ids: sessionIds
		};
		return this.http.post(`/v1/conferences/fcb9a015-4fb9-4c2b-ad9e-6d71caabf202/attendees/${id}`, body).map((response: Response) => {
			return response.json();
		});

	}
}
