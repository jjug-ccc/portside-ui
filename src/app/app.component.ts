import { Component } from '@angular/core';
import { ResizeService } from './resize.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ResizeService]
})
export class AppComponent {
	constructor(private resizeService: ResizeService) {
		resizeService.window.subscribe((val) => {
			if (val) {
				console.log(val.innerWidth);
			}
		});
	};
	title = 'app';
}
