import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AttendeeService {

	constructor(private http: Http) {
	}

	getSessions(id) {
		return this.http.get(`/v1/conferences/00000000-0000-0000-0000-000020180526/attendees/${id}`).map((response: Response) => {
			return response.json().submissions;
		});
	}

	updateSessions(id, sessionIds) {
		let body = {
			ids: sessionIds
		};
		return this.http.post(`/v1/conferences/00000000-0000-0000-0000-000020180526/attendees/${id}`, body).map((response: Response) => {
			return response.json();
		});

	}
}
