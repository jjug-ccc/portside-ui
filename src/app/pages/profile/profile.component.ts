import { Component, Inject, OnInit } from '@angular/core';
import { SessionService } from "../../session.service";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	email: FormControl = new FormControl('', [Validators.required, Validators.email]);

	constructor(
		private sessionService: SessionService,
        private router: Router,
        private dialogRef: MatDialogRef<ProfileComponent>,
		@Inject(MAT_DIALOG_DATA) public attends: any) {
	}

	ngOnInit() {
	}

	getErrorMessage() {
		if (this.email.hasError('required')) {
			return '入力必須です';
		}
		if (this.email.hasError('email')) {
			return '正しいメールアドレスを入力してください';
		}
		return '';
	}

	send() {
		let ids = Object.keys(this.attends).filter(key => this.attends[key]);

		this.sessionService.addAttendee(ids, this.email.value).subscribe(
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
