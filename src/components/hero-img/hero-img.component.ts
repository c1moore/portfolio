import { Component, Input } from '@angular/core';

import { PictureSource, PictureImg } from '../../model/picture';

@Component({
  selector:     'hero-img',
  templateUrl:  './hero-img.component.pug',
  styleUrls:    ['./hero-img.component.less']
})
export class HeroImgComponent {
  @Input() sources: PictureSource[];
  @Input() image: PictureImg;

  /**
   * Scrolls the view to the #content section.
   */
  goToContent(): void {
    document.querySelector('#content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }
}