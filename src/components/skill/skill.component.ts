import { Component, Input } from '@angular/core';

import { Skill } from '../../model/skill/skill.class';

@Component({
  selector:     'skill',
  templateUrl:  './skill.component.pug',
  styleUrls:    ['./skill.component.less']
})
export class SkillComponent {
  @Input() skill: Skill;
}