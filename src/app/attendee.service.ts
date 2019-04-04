import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AttendeeService {

	constructor(private http: Http) {
	}

	getSessions(id) {
		return this.http.get(`/v1/conferences/eab1136d-27dc-4874-81bc-7511ba540c69/attendees/${id}`).map((response: Response) => {
			return response.json().submissions;
		});
	}

	updateSessions(id, sessionIds) {
		let body = {
			ids: sessionIds
		};
		return this.http.post(`/v1/conferences/eab1136d-27dc-4874-81bc-7511ba540c69/attendees/${id}`, body).map((response: Response) => {
			return response.json();
		});

	}
}
