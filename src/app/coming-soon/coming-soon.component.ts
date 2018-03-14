import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector:			'coming-soon',
	templateUrl:	'./coming-soon.component.pug',
	styleUrls:		['./coming-soon.component.less']
})
export class ComingSoonComponent {
	constructor(titleManager: Title) {
		titleManager.setTitle('Coming Soon - c1moore Codes');
	}
}