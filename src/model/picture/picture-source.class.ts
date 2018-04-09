import * as _ from 'lodash';

import { ImageRepresentation } from './image-representation.class';

/**
 * PictureSource represents a <source> element nested in a <picture> element.
 */
export class PictureSource {
  mediaQuery: string; // The value of the `media` attribute.
  sizes: string;      // The value of the `sizes` attribute.

  sources: ImageRepresentation[]; // A list of ImageRepresentations that represent the `srcset` attribute.

  constructor({mediaQuery, sizes, sources = []}: {mediaQuery?: string, sizes?: string, sources?: ImageRepresentation[]}) {
    this.mediaQuery = mediaQuery;
    this.sizes = sizes;
    this.sources = sources;
  }

  /**
   * Converts the sources for this PictureSource to a string representation.
   *
   * @returns (string) a string representation of the sources
   */
  getSourceSet(): string {
    return _.map(this.sources, (source): string => source.toString()).join(', ');
  }
}