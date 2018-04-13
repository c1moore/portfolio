import { NgModule } from '@angular/core';

import { FullPageDirective } from './full-page/full-page.directive';
import { SectionDirective } from './full-page/section.directive';
import { HiddenUntilDirective } from './hidden-until/hidden-until.directive';

@NgModule({
  declarations: [
    FullPageDirective,
    HiddenUntilDirective,
    SectionDirective
  ],
  exports:      [
    FullPageDirective,
    HiddenUntilDirective,
    SectionDirective
  ]
})
export class DirectivesModule { }