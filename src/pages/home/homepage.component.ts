import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { PictureSource, PictureImg, ImageRepresentation } from '../../model/picture';
import { Skill } from '../../model/skill/skill.class';

@Component({
  selector:      'homepage',
  templateUrl:  './homepage.component.pug',
  styleUrls:    ['./homepage.component.less']
})
export class HomePageComponent implements OnInit {
  readonly fullPageOptions = {
    scrollBar:      true,
    scrollOverflow:  true
  };

  readonly programAdjectives: ReadonlyArray<string> = ['innovative', 'game-changing', 'flexible', 'maintainable', 'quality'];

  highlightedSkills: Skill[];
  readonly skills: Skill[] = [
    new Skill('Teamwork & Leadership', 'assets/images/skills/leadership.png'),
    new Skill('Desire to Learn', 'assets/images/skills/grad.png'),
    new Skill('Design Patterns', 'assets/images/skills/design.png'),
    new Skill('Built with Love', 'assets/images/skills/heart.png'),
    new Skill('Quality Work', 'assets/images/skills/diamond.png'),
    new Skill('OOP and OOD', 'assets/images/skills/oop.png'),
    new Skill('Communication', 'assets/images/skills/communication.png'),
    new Skill('Automated Testing', 'assets/images/skills/tdd.png')
  ];

  readonly programmingLanguages: Skill[] = [
    new Skill('Java', 'assets/images/languages/java.png', 0.5),
    new Skill('C', 'assets/images/languages/c.png', 0.7),
    new Skill('C++', 'assets/images/languages/cpp.png', 0.5),
    new Skill('JavaScript', 'assets/images/languages/js.png', 0.9),
    new Skill('HTML', 'assets/images/languages/html.png', 0.9),
    new Skill('CSS', 'assets/images/languages/css.png', 0.8),
    new Skill('SQL', 'assets/images/languages/sql.png', 0.5),
    new Skill('MongoDB', 'assets/images/languages/mongo.png', 0.9),
    new Skill('PHP', 'assets/images/languages/php.png', 0.5),
    new Skill('Less', 'assets/images/languages/less.png', 0.8),
    new Skill('Git', 'assets/images/languages/git.png', 0.8),
    new Skill('UML', 'assets/images/languages/uml.png', 0.6)
  ];

  readonly sources = [
    new PictureSource({
      mediaQuery: "(max-width: 767px)",
      sizes:      "(max-width: 1534px) 100vw, 1534px",
      sources:    [
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_300.jpg',
          width:  300
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_394.jpg',
          width:  394
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_481.jpg',
          width:  481
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_553.jpg',
          width:  553
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_635.jpg',
          width:  635
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_702.jpg',
          width:  702
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_771.jpg',
          width:  771
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_842.jpg',
          width:  842
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_910.jpg',
          width:  910
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_981.jpg',
          width:  981
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1041.jpg',
          width:  1041
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1105.jpg',
          width:  1105
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1171.jpg',
          width:  1171
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1233.jpg',
          width:  1233
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1286.jpg',
          width:  1286
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1345.jpg',
          width:  1345
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1410.jpg',
          width:  1410
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1469.jpg',
          width:  1469
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1517.jpg',
          width:  1517
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_1_1,c_fill,g_auto__c_scale,w_1534.jpg',
          width:  1534
        })
      ]
    }),
    new PictureSource({
      mediaQuery: "(min-width: 768px) and (max-width: 991px)",
      sizes:      "(max-width: 1983px) 70vw, 1388px",
      sources:    [
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg',
          width:  538
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_632.jpg',
          width:  632
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_723.jpg',
          width:  723
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_797.jpg',
          width:  797
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_892.jpg',
          width:  892
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_973.jpg',
          width:  973
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1045.jpg',
          width:  1045
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1118.jpg',
          width:  1118
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1195.jpg',
          width:  1195
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1277.jpg',
          width:  1277
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1354.jpg',
          width:  1354
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_4_3,c_fill,g_auto__c_scale,w_1388.jpg',
          width:  1388
        })
      ]
    }),
    new PictureSource({
      mediaQuery: "(min-width: 992px) and (max-width: 1199px)",
      sizes:      "(max-width: 2400px) 60vw, 1440px",
      sources:    [
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg',
          width:  596
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_706.jpg',
          width:  706
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_813.jpg',
          width:  813
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_909.jpg',
          width:  909
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1000.jpg',
          width:  1000
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1085.jpg',
          width:  1085
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1183.jpg',
          width:  1183
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1276.jpg',
          width:  1276
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1364.jpg',
          width:  1364
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1426.jpg',
          width:  1426
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg',
          width:  1440
        })
      ]
    })
  ];

  readonly image = new PictureImg({
      src:      'assets/images/hero/header_cdrn7y_c_scale,w_3600.jpg',
      sizes:    '(max-width: 9000px) 40vw, 3600px',
      sources:  [
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_480.jpg',
          width:  480
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_695.jpg',
          width:  695
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_886.jpg',
          width:  886
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1063.jpg',
          width:  1063
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1209.jpg',
          width:  1209
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1366.jpg',
          width:  1366
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1523.jpg',
          width:  1523
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1670.jpg',
          width:  1670
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1807.jpg',
          width:  1807
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_1949.jpg',
          width:  1949
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2074.jpg',
          width:  2074
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2199.jpg',
          width:  2199
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2331.jpg',
          width:  2331
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2452.jpg',
          width:  2452
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2579.jpg',
          width:  2579
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2698.jpg',
          width:  2698
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2808.jpg',
          width:  2808
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_2913.jpg',
          width:  2913
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3030.jpg',
          width:  3030
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3151.jpg',
          width:  3151
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3253.jpg',
          width:  3253
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3337.jpg',
          width:  3337
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3453.jpg',
          width:  3453
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3550.jpg',
          width:  3550
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/header_cdrn7y_c_scale,w_3600.jpg',
          width:  3600
        })
      ]
    });

  ngOnInit(): void {
    this.highlightedSkills = _.shuffle(this.skills).splice(0, 5);
  }
}