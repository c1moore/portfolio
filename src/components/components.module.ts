import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingEllipsisComponent } from './loading-ellipsis/loading-ellipsis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroImgComponent } from './hero-img/hero-img.component';


@NgModule({
	imports:			[
		CommonModule
	],
	declarations:	[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent
	],
	exports:			[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent
	]
})
export class ComponentsModule { }