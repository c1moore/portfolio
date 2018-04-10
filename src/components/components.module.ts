import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingEllipsisComponent } from './loading-ellipsis/loading-ellipsis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { TextTyperComponent } from './text-typer/text-typer.component';


@NgModule({
	imports:			[
		CommonModule
	],
	declarations:	[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent,
		TextTyperComponent
	],
	exports:			[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent,
		TextTyperComponent
	]
})
export class ComponentsModule { }