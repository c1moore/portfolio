import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingEllipsisComponent } from './loading-ellipsis/loading-ellipsis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { TextTyperComponent } from './text-typer/text-typer.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { SkillComponent } from './skill/skill.component';
import { CreditComponent } from './credit/credit.component';


@NgModule({
	imports:			[
		CommonModule,
		RouterModule
	],
	declarations:	[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent,
		TextTyperComponent,
		ProgrammingLanguageComponent,
		SkillComponent,
		CreditComponent
	],
	exports:			[
		LoadingEllipsisComponent,
		NavbarComponent,
		HeroImgComponent,
		TextTyperComponent,
		ProgrammingLanguageComponent,
		SkillComponent,
		CreditComponent
	]
})
export class ComponentsModule { }