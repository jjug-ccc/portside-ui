import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../environments/environment";

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	getSessions() {
		return this.http.get('/v1/conferences/fcb9a015-4fb9-4c2b-ad9e-6d71caabf202/submissions').map((response: Response) => {
			return response.json()['_embedded'].submissions
				.filter(x => x.talkType !== 'LT')
				.map(x => {
					let id = x._links.self.href.split('/').pop();
					let url = environment.apiUrl + '/submissions/' + id;
					let max = x.language === 'ENGLISH' ? 600 : 250;
					x.id = id;
					x.url = url;
					if (x.description.length > max) {
						x.description = x.description.substring(0, max) + ' (... 詳細へ続く)';
					}
					return x;
				});
		});
	}

	addAttendee(ids, email) {
		let body = {
			ids: ids,
			email: email
		};
		return this.http.post('/v1/conferences/fcb9a015-4fb9-4c2b-ad9e-6d71caabf202/attendees', body).map((response: Response) => {
			// return response.json();
			return;
		});
	}
}
