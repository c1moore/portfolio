import { NgModule } from '@angular/core';

import { LoadingEllipsisComponent } from './loading-ellipsis/loading-ellipsis.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
	declarations:	[
		LoadingEllipsisComponent,
		NavbarComponent
	],
	exports:			[
		LoadingEllipsisComponent,
		NavbarComponent
	]
})
export class ComponentsModule { }