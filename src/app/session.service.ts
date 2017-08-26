import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	getSessions() {
		return this.http.get('/sessions').map((response: Response) => {
			return response.json();
		});
	}

	addAttendee() {
		let body = {
			ids: ['897a2c29-bdca-4379-8e43-e464cd4b93e0'],
			email: 'portside@example.com'
		}
		return this.http.post('/attendees', body).map((response: Response) => {
			// return response.json();
			return;
		});
	}
}
