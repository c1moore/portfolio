export class ImageRepresentation {
  url:          string;  // The URL of this ImageRepresentation.
  width:        number;  // The width descriptor.
  pixelDensity: number;  // The pixel density descriptor.

  constructor({url, width, pixelDensity}: {url: string, width?: number, pixelDensity?: number}) {
    this.url = url;
    this.width = width;
    this.pixelDensity = pixelDensity;
  }

  toString(): string {
    let value = this.url + ' ' + this.width + 'w';

    if(this.pixelDensity) {
      value += (' ' + this.pixelDensity + 'x');
    }

    return value;
  }
}