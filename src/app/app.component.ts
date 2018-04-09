import { Component } from '@angular/core';

import { PictureSource, PictureImg, ImageRepresentation } from '../model/picture';

@Component({
	selector:			'app-root',
	templateUrl:	'./app.component.pug',
	styleUrls:		['./app.component.less']
})
export class AppComponent {
	readonly sources = [
		new PictureSource({
			mediaQuery: '(max-width: 767px)',
			sizes: 			'(max-width: 1513px) 100vw, 1513px',
			sources: 		[
				new ImageRepresentation({
					url:  	'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_300.jpg',
					width:  300
				}),
				new ImageRepresentation({
					url:		'29285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_381.jpg',
					width:	381
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_445.jpg',
					width:	445
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_521.jpg',
					width:	521
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_586.jpg',
					width: 	586
				}),
				new ImageRepresentation({
					url: 		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_655.jpg',
					width:	655
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_719.jpg',
					width:	719
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_784.jpg',
					width: 	784
				}),
				new ImageRepresentation({
					url:		'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_834.jpg',
					width:	834
				}),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_890.jpg',
          width:  890
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_951.jpg',
          width:  951
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_997.jpg',
          width:  997
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1063.jpg',
          width:  1063
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1120.jpg',
          width:  1120
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1168.jpg',
          width:  1168
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1216.jpg',
          width:  1216
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1269.jpg',
          width:  1269
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1325.jpg',
          width:  1325
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1374.jpg',
          width:  1374
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1423.jpg',
          width:  1423
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1472.jpg',
          width:  1472
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_1_1,c_fill,g_auto__c_scale,w_1513.jpg',
          width:  1513
        })
			]
		}),
		new PictureSource({
			mediaQuery:	'(min-width: 768px) and (max-width: 991px)',
			sizes:			'(max-width: 1983px) 70vw, 1388px',
			sources:		[
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg',
          width:  538
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_617.jpg',
          width:  617
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg',
          width:  694
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_761.jpg',
          width:  761
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_835.jpg',
          width:  835
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_905.jpg',
          width:  905
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_984.jpg',
          width:  984
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1045.jpg',
          width:  1045
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1120.jpg',
          width:  1120
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1179.jpg',
          width:  1179
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1243.jpg',
          width:  1243
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1311.jpg',
          width:  1311
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1366.jpg',
          width:  1366
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_4_3,c_fill,g_auto__c_scale,w_1388.jpg',
          width:  1388
        })
			]
		}),
		new PictureSource({
			mediaQuery:	'(min-width: 992px) and (max-width: 1199px)',
			sizes:			'(max-width: 2400px) 60vw, 1440px',
			sources:		[
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg',
          width:  596
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_697.jpg',
          width:  697
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_790.jpg',
          width:  790
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_875.jpg',
          width:  875
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_960.jpg',
          width:  960
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1041.jpg',
          width:  1041
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1119.jpg',
          width:  1119
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1211.jpg',
          width:  1211
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1293.jpg',
          width:  1293
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1364.jpg',
          width:  1364
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1423.jpg',
          width:  1423
        }),
        new ImageRepresentation({
          url:    'assets/images/hero/629285904_mdcc8b_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg',
          width:  1440
        })
			]
		})
	];

	readonly image = new PictureImg({
		src:			'assets/images/hero/629285904_mdcc8b_c_scale,w_2048.jpg',
		sizes:		'(max-width: 5120px) 40vw, 2048px',
		sources:	[
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_480.jpg',
        width:  480
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_593.jpg',
        width:  593
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_697.jpg',
        width:  697
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_794.jpg',
        width:  794
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_883.jpg',
        width:  883
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_963.jpg',
        width:  963
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1063.jpg',
        width:  1063
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1142.jpg',
        width:  1142
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1221.jpg',
        width:  1221
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1303.jpg',
        width:  1303
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1389.jpg',
        width:  1389
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1463.jpg',
        width:  1463
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1530.jpg',
        width:  1530
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1608.jpg',
        width:  1608
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1685.jpg',
        width:  1685
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1760.jpg',
        width:  1760
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1829.jpg',
        width:  1829
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1905.jpg',
        width:  1905
      }),
      new ImageRepresentation({
        url:    'assets/images/hero/629285904_mdcc8b_c_scale,w_1991.jpg',
        width:  1991
      }),
      new ImageRepresentation({
      	url:		'assets/images/hero/629285904_mdcc8b_c_scale,w_2048.jpg',
      	width:	2048
      })
		]
	})
}