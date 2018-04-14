import { Component, Input } from '@angular/core';

import { Skill } from '../../model/skill/skill.class';

@Component({
  selector:     'programming-language',
  templateUrl:  './programming-language.component.pug',
  styleUrls:    ['./programming-language.component.less']
})
export class ProgrammingLanguageComponent {
  @Input() language: Skill;
}