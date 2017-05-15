import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-reset',
	template: `
		<ion-row>
			<ion-col>
				<button ion-button color="danger" small block
					(click)="onReset('all')">Reset All</button>
			</ion-col>
		</ion-row>
	`
})
export class ResetComponent {

	onReset(type: string) {

	}
}