import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AttendeeService {

	constructor(private http: Http) {
	}

	getSessions(id) {
		return this.http.get(`/v1/conferences/4abde357-9994-4578-b760-a1698ff6f338/attendees/${id}`).map((response: Response) => {
			return response.json().submissions;
		});
	}

	updateSessions(id, sessionIds) {
		let body = {
			ids: sessionIds
		};
		return this.http.post(`/v1/conferences/4abde357-9994-4578-b760-a1698ff6f338/attendees/${id}`, body).map((response: Response) => {
			return response.json();
		});

	}
}
