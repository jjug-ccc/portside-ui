import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {

	constructor(private http: Http) {
	}

	getSessions() {
		return this.http.get('https://jjug-cfp.cfapps.io/v1/conferences/00000000-0000-0000-0000-000020180526/submissions').map((response: Response) => {
			return response.json()['_embedded'].submissions
				.filter(x => x.talkType !== 'LT')
				.map(x => {
					let id = x._links.self.href.split('/').pop();
					let url = 'https://jjug-cfp.cfapps.io/submissions/' + id;
					let max = x.language === 'ENGLISH' ? 600 : 400;
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
		return this.http.post('/attendees', body).map((response: Response) => {
			// return response.json();
			return;
		});
	}
}
