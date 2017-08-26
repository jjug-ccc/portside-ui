import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { environment } from "../environments/environment";

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
	merge(options?: RequestOptionsArgs): RequestOptions {
		options.url = environment.apiUrl + options.url;
		return super.merge(options);
	}
}
