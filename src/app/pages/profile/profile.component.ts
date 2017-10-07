import { Component, Inject, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	attendee: any = {};

	constructor(
		private sessionService: SessionService,
        private router: Router,
        private dialogRef: MatDialogRef<ProfileComponent>,
		@Inject(MAT_DIALOG_DATA) public attends: any) {
	}

	ngOnInit() {
	}

	send() {
		let ids = Object.keys(this.attends).filter(key => this.attends[key]);

		this.sessionService.addAttendee(ids, this.attendee.email).subscribe(
			data => {
				this.dialogRef.close();
				this.router.navigate(['/thanks'])
			},
			error => {
				console.log(error);
			}
		);
	}
}
