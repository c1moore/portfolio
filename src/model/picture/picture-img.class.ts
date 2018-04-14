import * as _ from 'lodash';

import { ImageRepresentation } from './image-representation.class';

export class PictureImg {
  sizes:    string;  // The value of the `sizes` attribute.
  src:      string;  // The value of the `src` attribute.
  alt:      string;  // The value of the `alt` attribute.

  sources:  ImageRepresentation[];  // A list of ImageRepresentations that represent the `srcset` attribute.

  constructor({src, alt = "", sizes, sources}: {src: string, alt?: string, sizes?: string, sources?: ImageRepresentation[]}) {
    this.src = src;
    this.alt = alt;
    this.sizes = sizes;
    this.sources = sources;
  }

  /**
   * Converts the sources for this PictureImg to a string representation.
   *
   * @returns (string) a string representation of the sources
   */
  getSourceSet(): string {
    return _.map(this.sources, (source): string => source.toString()).join(', ');
  }
}